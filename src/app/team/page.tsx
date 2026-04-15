// src/app/team/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founder, teamMembers, formerMembers, TeamMember, FormerTeamMember } from "@/data/team";
import { FaLinkedin,  FaEnvelope, FaCalendarAlt } from "react-icons/fa"; // Added FaCalendarAlt

import { useI18n } from "@/i18n/LocaleProvider";

// helper func (Fixes Paths for GitHub Pages)
const resolveImagePath = (path: string) => {
  if (path.startsWith("http")) return path;
  const prefix = process.env.NODE_ENV === "production" ? "/website_frontend" : "";
  return `${prefix}${path}`;
};

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

// --- Active Team Member Card ---
const TeamCard = ({ member, isLarge = false }: { member: TeamMember; isLarge?: boolean }) => {
  const imageUrl = resolveImagePath(member.image);

  return (
    <div
      className={`
        relative bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg
        flex flex-col items-center text-center transition-transform hover:scale-[1.02] group h-full
        ${isLarge ? "p-10 max-w-2xl mx-auto" : "p-6 w-full"}
      `}
    >
      <div
        className={`
          relative rounded-full overflow-hidden border-4 border-gray-100 dark:border-white/10 group-hover:border-accent/50 transition-colors
          ${isLarge ? "w-48 h-48 mb-6" : "w-32 h-32 mb-4"}
        `}
      >
        <Image src={imageUrl} alt={member.name} fill className="object-cover" />
      </div>

      <h3 className={`font-bold text-gray-900 dark:text-white ${isLarge ? "text-3xl" : "text-xl"}`}>
        {member.name}
      </h3>

      <p className={`text-accent font-medium mb-6 ${isLarge ? "text-xl mt-2" : "text-sm mt-1"}`}>
        {member.role}
      </p>

      <div className="flex gap-4 mt-auto">
        <SocialLink href={member.socials.linkedin} icon={<FaLinkedin />} />
        <SocialLink href={member.socials.email} icon={<FaEnvelope />} />
      </div>
    </div>
  );
};

// Former Team Member Card
const FormerTeamCard = ({ member }: { member: FormerTeamMember }) => {
  const imageUrl = resolveImagePath(member.image);

  return (
    <div
      className={`
        relative bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg
        flex flex-col items-center text-center transition-transform hover:scale-[1.02] group h-full p-6 w-full
      `}
    >
      {/* Profile Image with Hover Ring */}
      <div
        className={`
          relative rounded-full overflow-hidden border-4 border-gray-100 dark:border-white/10 group-hover:border-accent/50 transition-colors
          w-32 h-32 mb-4 shrink-0
        `}
      >
        <Image src={imageUrl} alt={member.name} fill className="object-cover" />
      </div>

      {/* Name & Role */}
      <h3 className="font-bold text-gray-900 dark:text-white text-xl">
        {member.name}
      </h3>
      <p className="text-accent font-medium text-sm mt-1 mb-2">
        {member.role}
      </p>
      
      {/* Period/Dates */}
      <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 flex items-center justify-center gap-1.5 font-medium w-full">
        <FaCalendarAlt className="text-gray-400" /> {member.period}
      </p>
      
      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed grow mb-6">
        {member.description}
      </p>

      {/* Social Links (Pushed to bottom) */}
      <div className="flex gap-4 mt-auto">
        <SocialLink href={member.socials.linkedin} icon={<FaLinkedin />} />
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
        
        {/* Main Team Header */}
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

        {/* Main Team Grid (Flattened, including Founder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[founder, ...teamMembers].map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full flex"
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Former Members Section */}
        {formerMembers.length > 0 && (
          <div className="mt-32 pt-16 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {t.teamPage?.formerTitlePrefix}{" "}
                <span className="text-accent">
                  {t.teamPage?.formerTitleHighlight ?? "Former"}
                </span>{" "}
                {t.teamPage?.formerTitleSuffix ?? "Team Members"}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                {t.teamPage?.formerSubtitle || "Honoring the dedication of those who helped build the foundation of our community."}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formerMembers.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <FormerTeamCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}