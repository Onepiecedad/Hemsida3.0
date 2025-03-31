'use client';

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from '@/components/MainHeading';
import { spacing, typography, effects, radius, colors, transition } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { withThemeValidation } from "@/lib/hoc/withThemeValidation";
import type { ThemeSection } from "@/lib/utils/theme-validator";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

interface Step {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

const steps: Step[] = [
  {
    title: "Book Your Free AI Strategy Call",
    subtitle: "Let's Talk About What's Not Working—And How to Fix It Fast",
    description: "Let's break down your workflow to uncover time-wasters, bottlenecks, and untapped opportunities—then map out how AI can fix them fast.",
    details: [
      "This 15-minute call is where your transformation starts.",
      "We'll walk through your daily workflows and identify what's costing you time, money, and momentum.",
      "You'll get expert insight into what's possible with AI—without the jargon or sales pitch.",
      "Just clarity, strategy, and next steps you can act on."
    ]
  },
  {
    title: "Get Your Custom AI Plan",
    subtitle: "Your Custom AI Plan—Built for Growth and Efficiency",
    description: "You'll receive a personalized automation roadmap—tailored to your workflows, goals, and growth potential.",
    details: [
      "After the strategy call, you'll receive a tailored automation plan based on your workflows, goals, and biggest opportunities.",
      "No generic advice—just clear, actionable next steps.",
      "We'll show you what to automate, how it works, and the results you can expect.",
      "You'll know exactly what it costs, what it delivers, and how quickly it can go live—so you can move forward with total confidence."
    ]
  },
  {
    title: "We Build & Test Your AI Solution",
    subtitle: "Your AI Solution—Fully Built, Tested, and Ready to Launch",
    description: "We build, train, and test your custom AI system—so it's ready to perform from day one.",
    details: [
      "Once you approve the plan, we get to work.",
      "Your custom AI system is built, trained, and configured to match your workflows, rules, and preferences.",
      "We handle the complexity—so you don't have to lift a finger.",
      "You'll preview the system, test it live, and make any final tweaks—so it works exactly how you want it.",
      "Launch in days, not months."
    ]
  },
  {
    title: "Launch & Start Seeing Results",
    subtitle: "Your AI Gets Smarter—So You Keep Getting Better Results",
    description: "Your AI system goes live—and keeps getting smarter with every interaction.",
    details: [
      "Once your system goes live, it doesn't just run—it learns.",
      "Every call, click, and conversation helps your AI improve accuracy, speed, and impact automatically.",
      "We monitor performance, refine workflows, and make smart updates—so your results keep compounding.",
      "No extra work on your part. Just better outcomes, week after week."
    ]
  }
];

function HowItWorksSectionBase() {
  return (
    <SectionWrapper 
      id="how-it-works"
      data-theme-debug="HowItWorksSection"
    >
      <SectionHeading
        title="Your AI Employee—Fully Trained in Days, No Effort Required"
        subtitle="You focus on the results—we'll handle the setup. Just follow 4 simple steps."
      />

      <div className={spacing.container}>
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 w-full"
        )}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <Card
                icon={
                  <div className={cn(
                    typography.icon,
                    radius.lg,
                    "bg-white/10 w-8 h-8 flex items-center justify-center",
                    effects.glass.light,
                    effects.hover.scale
                  )}>
                    {index + 1}
                  </div>
                }
                title={step.title}
                description={step.description}
                cta={
                  <>
                    <p className={cn(typography.heading.h4, colors.text.accent, "mb-4")}>{step.subtitle}</p>
                    <ul className={cn(spacing.stack.sm, "list-disc pl-6")}>
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className={cn(typography.paragraph, "flex items-start gap-2")}>
                          <span className={colors.text.accent}>•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <p className={cn("mt-4", typography.text.secondary)}>💬 Talk to Dana to learn more about this step.</p>
                  </>
                }
                showDanaButton={true}
                className={cn(
                  "min-h-[160px]",
                  "relative",
                  "before:absolute before:left-0 before:top-0 before:w-1 before:h-full",
                  "before:bg-gradient-to-b before:from-primary before:to-primary/50",
                  "before:rounded-l-full",
                  "before:opacity-0 hover:before:opacity-100",
                  transition.base
                )}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export const HowItWorksSection = withThemeValidation(
  HowItWorksSectionBase, 
  "HowItWorksSection", 
  ["typography", "spacing", "radius", "colors", "effects", "transition"] as ThemeSection[]
); 