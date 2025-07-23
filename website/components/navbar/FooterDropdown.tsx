import React from "react";
import { ChevronDown } from "lucide-react";

interface FooterDropdownItem {
  label: string;
  href?: string;
}

interface FooterDropdownProps {
  trigger: string;
  dropdownContent: FooterDropdownItem[];
}

export default function FooterDropdown({
  trigger,
  dropdownContent,
}: FooterDropdownProps) {
  return (
    <>
      <h3 className="">{trigger}</h3>
      <ul className="">
        {dropdownContent.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
