"use client";

import { siteConfig } from "@/lib/config";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navs: NavItem[] = siteConfig.nav.links;

export function NavMenu() {
  const pathname = usePathname();
  const ref = useRef<HTMLUListElement>(null);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isManualScroll, setIsManualScroll] = useState(false);

  const updatePosition = (selector: string) => {
    const item = ref.current?.querySelector(selector)?.parentElement;
    if (item) {
      const rect = item.getBoundingClientRect();
      setLeft(item.offsetLeft);
      setWidth(rect.width);
      setIsReady(true);
    }
  };

  React.useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname);
      updatePosition(`[href="${pathname}"]`);
    } else {
      // Logic for home page section highlighting
      const firstSection = navs[0].href.split("#")[1] || "hero";
      setActiveSection(firstSection);
      updatePosition(`[href$="#${firstSection}"]`);
    }
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return;
      // Skip scroll handling during manual click scrolling
      if (isManualScroll) return;

      const sections = navs
        .filter((item) => item.href.includes("#"))
        .map((item) => item.href.split("#")[1]);

      // Find the section closest to viewport top
      let closestSection = sections[0];
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100); // Offset by 100px to trigger earlier
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        }
      }

      // Update active section and nav indicator
      if (closestSection) {
        setActiveSection(closestSection);
        updatePosition(`[href$="#${closestSection}"]`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll, pathname]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem,
  ) => {
    const isAnchor = item.href.includes("#");
    const targetId = isAnchor ? item.href.split("#")[1] : null;
    const element = targetId ? document.getElementById(targetId) : null;

    if (element) {
      e.preventDefault();
      // Set manual scroll flag
      setIsManualScroll(true);

      // Immediately update nav state
      setActiveSection(targetId!);
      updatePosition(`[href$="#${targetId}"]`);

      // Calculate exact scroll position
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset

      // Smooth scroll to exact position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reset manual scroll flag after animation completes
      setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    }
  };

  return (
    <div className="w-full hidden md:block">
      <ul
        className="relative mx-auto flex w-fit rounded-full h-11 px-2 items-center justify-center"
        ref={ref}
      >
        {navs.map((item) => (
          <li
            key={item.name}
            className={`z-10 cursor-pointer h-full flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeSection ===
              (item.href.includes("#") ? item.href.split("#")[1] : item.href)
                ? "text-primary"
                : "text-primary/60 hover:text-primary"
            } tracking-tight`}
          >
            <Link href={item.href} onClick={(e) => handleClick(e, item)}>
              {item.name}
            </Link>
          </li>
        ))}
        {isReady && (
          <motion.li
            animate={{ left, width }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 my-1.5 rounded-full bg-accent/60 border border-border"
          />
        )}
      </ul>
    </div>
  );
}
