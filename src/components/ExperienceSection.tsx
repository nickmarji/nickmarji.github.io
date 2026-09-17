import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "PharmatrophiX",
    location: "Remote",
    roles: [
      {
        title: "Identity and Access Management Consultant",
        type: "Part-Time",
        dates: "Feb 2026 – Present",
        responsibilities: [
          "Built Microsoft 365 identity and access security from the ground up for a 15-person biopharma startup, implementing Entra ID SSO, MFA, Conditional Access, and RBAC to protect sensitive company data",
          "Partnered with business stakeholders to assess collaboration and access needs, then configured SharePoint site structure, guest access controls, and permission scopes aligned to business requirements while enforcing least-privilege principles",
          "Responded to a compromised co-founder account, tracing the incident to a legacy Azure CLI authentication path that bypassed Conditional Access policies; contained the account, verified no data had leaked, and closed the gap by updating Conditional Access to cover legacy authentication methods",
        ],
      },
    ],
  },
  {
    company: "Alkeus Pharmaceuticals, Inc.",
    location: "Cambridge, MA",
    roles: [
      {
        title: "IT Security Associate",
        type: "Part-Time",
        dates: "Jan 2025 – May 2026",
        responsibilities: [
          "Conducted end-to-end Microsoft 365 security posture assessment, identifying and remediating 25+ tenant misconfigurations to align environment with CIS Controls and NIST CSF standards",
          "Performed continuous log analysis and alert triage across cloud identity and endpoint telemetry to identify anomalous behavior patterns and potential security incidents",
          "Hardened M365 environment by auditing permission scopes and enforcing least-privilege access ahead of Microsoft Copilot rollout; deployed 100+ endpoints via Intune with automated enrollment, compliance policies, and conditional access controls",
        ],
      },
      {
        title: "IT Operations Co-op",
        type: "Full-Time Co-op",
        dates: "May 2024 – Jan 2025",
        responsibilities: [
          "Coordinated with department leads across the business to catalog the software and technology each team relied on, documenting and tracking configurations across 100+ devices while flagging applications that posed a security risk by lacking SSO support",
          "Identified recurring connectivity gaps affecting daily operations and led an office-wide network infrastructure upgrade, coordinating structured wiring and access point reconfiguration to achieve a 70%+ improvement in Wi-Fi throughput",
        ],
      },
    ],
  },
  {
    company: "Google",
    location: "Remote",
    roles: [
       {
         title: "CSSI Scholar",
         type: "Internship",
         dates: "Jul 2022 – Aug 2022",
         responsibilities: [
           "Selected for Google's Computer Science Summer Institute, a competitive 4-week program for students pursuing careers in software engineering",
           "Completed a project-based curriculum in HTML, CSS, and JavaScript, building interactive web applications while collaborating with peers and receiving mentorship from Google engineers",
           "Participated in workshops on product design, resume development, and technical interview preparation led by Google professionals",
         ],
       },
    ],
  },
  {
    company: "STEM Alliance",
    location: "Yonkers, NY",
    roles: [
       {
         title: "Teaching and Technical Intern",
         type: "Part-Time",
         dates: "Oct 2021 – Jun 2022",
         responsibilities: [
           "Assisted with the deployment of home Wi-Fi and technology resources for low-income residents in Westchester County, helping expand internet access in underserved communities",
           "Provided hands-on troubleshooting for connectivity and device issues, helping community members resolve technical problems and improve digital literacy",
           "Supported instructors in technology education programs by managing class rosters, tracking attendance, and assisting with classroom activities",
         ],
       },
    ],
  },
  {
    company: "All Star Code",
    location: "New York, NY",
    roles: [
      {
        title: "Tech Entrepreneurship Incubator Program",
        type: "Internship",
        dates: "Feb 2021 – Jun 2021",
        responsibilities: [
          "Collaborated in a team environment to develop Inventure, a web platform designed to connect underrepresented startup founders with investors to support business growth",
          "Contributed to the design, development, and presentation of the platform while applying web development and product design concepts",
        ],
      },
      {
        title: "Student Recruitment Liaison",
        type: "Internship",
        dates: "Feb 2021 – Apr 2021",
        responsibilities: [
          "Supported recruitment for the All Star Code Class of 2021 by reviewing and evaluating program applications using internal program systems",
          "Hosted and facilitated virtual information sessions for prospective students, providing program overviews and assisting applicants through the enrollment process",
          "Collaborated with program staff to promote participation and increase awareness of technology education opportunities for underrepresented students",
        ],
      },
      {
        title: "Student Software Engineer",
        type: "Internship",
        dates: "Jul 2020 – Aug 2020",
        responsibilities: [
          "Selected for a competitive computer science summer intensive focused on empowering underrepresented students through technology and entrepreneurship",
          "Developed foundational skills in HTML, CSS, JavaScript, and API integration while building interactive web applications",
          "Collaborated with peers to design and develop EatRight, a web-based game promoting healthy lifestyle choices through interactive user experiences",
        ],
      },
    ],
  },
  {
    company: "Northeastern University Housing & Residential Life",
    location: "Boston, MA",
    roles: [
      {
        title: "Senior Resident Assistant",
        type: "Part-Time",
        dates: "Aug 2023 – April 2026",
        responsibilities: [
          "Managed a residential community of 50+ students (250+ over tenure) by conducting weekly one-on-one meetings, facilitating conflict resolution, ensuring policy compliance, and responding to emergencies while maintaining student confidentiality",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 scroll-mt-20 bg-cyber-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-mono font-bold text-foreground">work_experience</h2>
            <div className="flex-1 cyber-line" />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />

                <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/20 transition-colors">
                  {/* Company header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-lg font-semibold text-primary font-mono">{exp.company}</h3>
                    <span className="text-xs text-muted-foreground font-mono">{exp.location}</span>
                  </div>

                  {/* Roles within company */}
                  <div className="space-y-6">
                    {exp.roles.map((role, ri) => (
                      <div key={ri} className={ri > 0 ? "pt-4 border-t border-border/50" : ""}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div>
                            <h4 className="font-medium text-foreground">{role.title}</h4>
                            <span className="text-xs text-muted-foreground">{role.type}</span>
                          </div>
                          <span className="text-xs font-mono text-muted-foreground mt-1 sm:mt-0">
                            {role.dates}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {role.responsibilities.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1 shrink-0">▹</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
