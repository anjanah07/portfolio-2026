import { Link, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactStrip() {
  const items = [
    {
      icon: MapPin,
      label: profile.location,
      href: null,
    },
    {
      icon: Mail,
      label: profile.email,
      href: `mailto:${profile.email}`,
    },
    // {
    //   icon: Phone,
    //   label: profile.phone,
    //   href: `tel:${profile.phone.replaceAll(" ", "")}`,
    // },
    {
      icon: Link,
      label: "LinkedIn",
      href: profile.linkedin,
    },
    {
      icon: Link,
      label: "GitHub",
      href: profile.github,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <Icon className="h-4 w-4 text-cyan-200" />
            <span>{item.label}</span>
          </>
        );

        if (!item.href) {
          return (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
            >
              {content}
            </span>
          );
        }

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
