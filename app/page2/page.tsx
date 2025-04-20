"use client"

import { useState } from "react"
import { ArrowLeft, Activity, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function Page2() {
  const { t } = useLanguage()
  const [showDetailedReport, setShowDetailedReport] = useState(false)

  const handleDetailedReportClick = () => {
    setShowDetailedReport(true)
    // In a real application, this would open a modal or navigate to a detailed report page
    alert(t("monitor.viewDetailedReport"))
  }

  return (
    <div className="min-h-screen bg-[#e8f1f4] dark:bg-gray-900">
      <main className="container mx-auto py-8 px-4 pt-20">
        <Link href="/" className="inline-flex items-center text-[#0a9daa] dark:text-teal-400 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("back.overview")}
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-[#0a9daa] dark:text-teal-400">{t("monitor.title")}</h1>
            <Badge className="bg-[#8cc63f] hover:bg-[#7ab535] dark:bg-green-600 dark:hover:bg-green-700">2023</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Card className="bg-[#0a9daa] dark:bg-teal-700 text-white border-0">
                <CardContent className="p-4">
                  <h2 className="font-medium">{t("monitor.progress")}</h2>
                  <p className="text-sm mt-1 opacity-80">{t("monitor.overview")}</p>
                </CardContent>
              </Card>

              <div className="mt-6">
                <Card className="border border-[#e0f0f2] bg-[#e8f6f8] dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">
                      {t("monitor.implementationPhase")}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-2 flex-1 bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div className="h-2 w-4/5 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">80%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <Card className="bg-[#0a9daa] dark:bg-teal-700 text-white border-0">
                  <CardContent className="p-4">
                    <h2 className="font-medium">{t("monitor.digitalInfrastructure")}</h2>
                    <p className="text-sm mt-1 opacity-80">{t("monitor.modernization")}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#0a9daa] dark:bg-teal-600 flex items-center justify-center">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#0a9daa] dark:bg-teal-600 flex items-center justify-center">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#0a9daa] dark:bg-teal-600 flex items-center justify-center">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">4</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-xs">5</span>
                  </div>
                </div>
                <div className="text-[#0a9daa] dark:text-teal-400 text-sm font-medium">
                  <span>3/5</span> {t("monitor.phases")}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border border-[#e0f0f2] bg-[#e8f6f8] dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">
                      {t("monitor.systemIntegration")}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-2 flex-1 bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div className="h-2 w-3/4 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">75%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-[#e0f0f2] bg-[#e8f6f8] dark:bg-gray-700 dark:border-gray-600">
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">
                      {t("monitor.dataMigration")}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-2 flex-1 bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div className="h-2 w-2/3 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">66%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 bg-[#8cc63f] dark:bg-green-700 text-white">
                <CardContent className="p-4">
                  <h2 className="font-medium">{t("monitor.nextSteps")}</h2>
                  <ul className="text-sm mt-2 space-y-2">
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>{t("monitor.step1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>{t("monitor.step2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>•</span>
                      <span>{t("monitor.step3")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-[#e8f6f8] dark:bg-gray-700 flex items-center justify-center mb-1">
                    <span className="text-[#0a9daa] dark:text-teal-400 text-xl font-bold">85%</span>
                  </div>
                  <span className="text-xs text-center text-gray-600 dark:text-gray-300">
                    {t("monitor.userAcceptance")}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-[#e8f6f8] dark:bg-gray-700 flex items-center justify-center mb-1">
                    <span className="text-[#0a9daa] dark:text-teal-400 text-xl font-bold">92%</span>
                  </div>
                  <span className="text-xs text-center text-gray-600 dark:text-gray-300">
                    {t("monitor.availability")}
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-[#e8f6f8] dark:bg-gray-700 flex items-center justify-center mb-1">
                    <span className="text-[#0a9daa] dark:text-teal-400 text-xl font-bold">78%</span>
                  </div>
                  <span className="text-xs text-center text-gray-600 dark:text-gray-300">
                    {t("monitor.efficiency")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              className="bg-[#0a9daa] hover:bg-[#088a96] dark:bg-teal-700 dark:hover:bg-teal-800"
              onClick={handleDetailedReportClick}
            >
              {t("monitor.viewDetailedReport")} <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a9daa] dark:bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center">
              <Activity className="h-3 w-3" />
            </div>
            <span>{t("footer.copyright")}</span>
          </div>
          <div className="mt-2 md:mt-0">
            <span>{t("footer.contact")}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
