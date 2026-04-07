import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech, Data Science",
      institution: "Bapatla Engineering College",
      period: "2023 - 2026",
      description:
        "Specializing in Data Science, focusing on advanced analytics, machine learning, and data-driven decision making.",
    },
    {
      degree: "Diploma, ECE",
      institution: "Bapatla Polytechnic College",
      period: "2020 - 2023",
      description: "Acquired fundamental knowledge in Electronics and Communications Engineering with hands-on technical training.",
    },
    {
      degree: "Class X",
      institution: "Sri Sai High School",
      period: "2020",
      description: "Completed secondary education with a strong academic performance.",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-6 flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">
                        {edu.institution} ({edu.period})
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
