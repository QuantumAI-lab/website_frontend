// from src/app/team/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founder, teamMembers, TeamMember } from "@/data/team";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from "react-icons/fa";

import { useI18n } from "@/i18n/LocaleProvider";

const SocialLink = ({ href, icon }: { href?: string; icon: React.ReactNode }) => {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-gray-500 hover:text-accent transition-colors text-xl"
    >
      {icon}
    </a>
  );
};

const TeamCard = ({ member, isLarge = false }: { member: TeamMember; isLarge?: boolean }) => {
  return (
    <div
      className={`
        relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg
        flex flex-col items-center text-center transition-transform hover:scale-[1.02] group
        ${isLarge ? "p-10 max-w-2xl mx-auto" : "p-6 w-full"}
      `}
    >
      <div
        className={`
          relative rounded-full overflow-hidden border-4 border-white/10 group-hover:border-accent/50 transition-colors
          ${isLarge ? "w-48 h-48 mb-6" : "w-32 h-32 mb-4"}
        `}
      >
        <Image src={member.image} alt={member.name} fill className="object-cover" />
      </div>

      <h3 className={`font-bold text-gray-900 dark:text-white ${isLarge ? "text-3xl" : "text-xl"}`}>
        {member.name}
      </h3>

      <p className={`text-accent font-medium mb-4 ${isLarge ? "text-xl mt-2" : "text-sm mt-1"}`}>
        {member.role}
      </p>

      <div className="flex gap-4 mt-auto">
        <SocialLink href={member.socials.linkedin} icon={<FaLinkedin />} />
        <SocialLink href={member.socials.x} icon={<FaTwitter />} />
        <SocialLink href={member.socials.facebook} icon={<FaFacebook />} />
        <SocialLink href={member.socials.email} icon={<FaEnvelope />} />
      </div>
    </div>
  );
};

export default function TeamPage() {
  const { t } = useI18n();

  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t.teamPage.titlePrefix} <span className="text-accent">{t.teamPage.titleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            {t.teamPage.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <TeamCard member={founder} isLarge />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full"
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
