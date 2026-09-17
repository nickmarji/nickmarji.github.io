import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const skills = [
  "Python", "Bash", "PowerShell", "SQL", "KQL", "C++",
  "CrowdStrike Falcon", "Splunk", "Wireshark", "BurpSuite",
  "M365 Admin", "Azure", "Intune", "Entra ID",
  "Linux", "Windows", "NIST", "ISO 27001"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Terminal className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-mono font-bold text-foreground">about_me</h2>
            <div className="flex-1 cyber-line" />
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm an early cybersecurity professional with a B.S. in Cybersecurity &amp; Business
                Administration from Northeastern University and over two years of hands-on IT security
                experience. Most of my work lives inside Microsoft Entra ID: locking down and protecting
                the tenant, building out Conditional Access policies, managing RBAC, and handling identity
                end to end, onboarding, offboarding, access reviews, all of it. I've built automation and
                scripts to streamline a lot of that so it doesn't depend on someone remembering to do it
                manually, and I've done real threat hunting and incident response when something actually
                goes wrong. I've also run social engineering training for end users, live phishing
                simulations, not a slide deck, to see how people actually respond under real conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That hands-on admin experience runs through everything I've built, at Alkeus Pharmaceuticals
                and now as an IAM consultant at PharmatrophiX, where I built a growing biopharma startup's
                security from the ground up.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey into tech started early: building websites at All Star Code, bridging the digital
                divide at STEM Alliance, and learning from Google engineers during their CSSI program. Those
                experiences shaped my interest in using technology to solve real problems and protect people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Lately I've also been building hands-on AWS experience independently, including designing
                and deploying an SSH honeypot to study real attacker behavior, and I'm increasingly
                interested in how AI agents can be applied to solve real business problems, not just
                security ones.
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-sm font-mono text-primary mb-4">&gt; core_skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono bg-secondary text-secondary-foreground rounded-sm border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
