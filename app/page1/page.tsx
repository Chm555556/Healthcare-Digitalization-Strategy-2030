"use client"

import { useState } from "react"
import { ChevronRight, Activity, ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function Page1() {
  const { t } = useLanguage()
  const [showFullReport, setShowFullReport] = useState(false)
  const [showDetailedSchedule, setShowDetailedSchedule] = useState(false)

  const handleFullReportClick = () => {
    setShowFullReport(true)
    // In a real application, this would open a modal or navigate to a detailed report page
    alert(t("dashboard.viewFullReport"))
  }

  const handleDetailedScheduleClick = () => {
    setShowDetailedSchedule(true)
    // In a real application, this would open a modal or navigate to a detailed schedule page
    alert(t("dashboard.viewDetailedSchedule"))
  }

  return (
    <div className="min-h-screen bg-[#e8f1f4] dark:bg-gray-900">
      {/* Header Section */}
      <header className="bg-[#0a9daa] dark:bg-gray-800 text-white p-8 pt-16 rounded-b-3xl">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{t("app.title")}</h1>
                <p className="text-sm opacity-80">{t("app.subtitle")}</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-8">
                <div>
                  <h3 className="text-sm font-medium">ZEITRAHMEN</h3>
                  <div className="h-1 w-32 bg-white/20 mt-2"></div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">ZIELGRUPPE</h3>
                  <div className="h-1 w-32 bg-white/20 mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-20 opacity-20 hidden lg:block">
            <div className="w-64 h-64 rounded-full bg-[#7dd0d8]"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <Link href="/" className="inline-flex items-center text-[#0a9daa] dark:text-teal-400 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("back.overview")}
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <Card className="border-l-4 border-l-[#0a9daa] dark:border-l-teal-500 dark:bg-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-[#0a9daa] dark:text-teal-400">
                  {t("dashboard.structuralDeficits")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t("dashboard.transformation")}</p>
                <ul className="text-xs space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.deficit1")}</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.deficit2")}</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.deficit3")}</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#0a9daa] dark:border-l-teal-500 dark:bg-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-[#0a9daa] dark:text-teal-400">
                  {t("dashboard.potentialValue")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t("dashboard.processOptimization")}</p>
                <ul className="text-xs space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.value1")}</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.value2")}</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.value3")}</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#0a9daa] dark:border-l-teal-500 dark:bg-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-[#0a9daa] dark:text-teal-400">
                  {t("dashboard.digitalGoals")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t("dashboard.longTermStrategy")}</p>
                <ul className="text-xs space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.goal1")}</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.goal2")}</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.goal3")}</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 pt-0">
            <div className="relative">
              <div className="absolute left-0 top-0 w-2 h-full bg-[#8cc63f] dark:bg-green-600"></div>
              <Card className="border-0 pl-4 dark:bg-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-[#0a9daa] dark:text-teal-400">
                    {t("dashboard.currentGuidelines")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs space-y-3 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5 text-[#8cc63f] dark:text-green-500">→</div>
                      <p>{t("dashboard.guideline1")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5 text-[#8cc63f] dark:text-green-500">→</div>
                      <p>{t("dashboard.guideline2")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5 text-[#8cc63f] dark:text-green-500">→</div>
                      <p>{t("dashboard.guideline3")}</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="dark:bg-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium text-[#0a9daa] dark:text-teal-400">
                  {t("dashboard.digitalMaturity")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t("dashboard.developmentStages")}</p>
                <ul className="text-xs space-y-2 text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.maturity1")}</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.maturity2")}</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 h-4 mt-0.5">•</div>
                    <p>{t("dashboard.maturity3")}</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="relative">
              <div className="absolute right-0 top-0 w-2 h-full bg-[#8cc63f] dark:bg-green-600"></div>
              <Card className="border-0 pr-4 dark:bg-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-[#0a9daa] dark:text-teal-400">
                    {t("dashboard.actionAreas")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs space-y-3 text-gray-500 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5 text-[#8cc63f] dark:text-green-500">→</div>
                      <p>{t("dashboard.action1")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5 text-[#8cc63f] dark:text-green-500">→</div>
                      <p>{t("dashboard.action2")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5 text-[#8cc63f] dark:text-green-500">→</div>
                      <p>{t("dashboard.action3")}</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#0a9daa] dark:bg-gray-800 rounded-xl p-6 text-white relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-20">
              <div className="w-40 h-40 rounded-full bg-[#7dd0d8] dark:bg-teal-700"></div>
            </div>
            <h2 className="text-xl font-bold mb-4">{t("dashboard.digitalizationDegree")}</h2>
            <p className="text-sm opacity-80 mb-6 max-w-md">{t("dashboard.currentAssessment")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card className="bg-white/10 border-0 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium">{t("dashboard.infrastructure")}</h3>
                  <div className="h-1 w-full bg-white/20 mt-2 mb-1">
                    <div className="h-1 w-3/4 bg-white"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>0</span>
                    <span>75%</span>
                    <span>100</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-0 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium">{t("dashboard.processDigitalization")}</h3>
                  <div className="h-1 w-full bg-white/20 mt-2 mb-1">
                    <div className="h-1 w-1/2 bg-white"></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>0</span>
                    <span>50%</span>
                    <span>100</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white/20 hover:text-white"
                onClick={handleFullReportClick}
              >
                {t("dashboard.viewFullReport")} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#0a9daa] dark:text-teal-400">{t("dashboard.milestones")}</h2>
              <Badge className="bg-[#8cc63f] hover:bg-[#7ab535] dark:bg-green-600 dark:hover:bg-green-700">
                2023-2025
              </Badge>
            </div>

            <div className="space-y-4">
              <Card className="border border-[#e0f0f2] bg-[#e8f6f8] dark:bg-gray-700 dark:border-gray-600">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">{t("dashboard.phase1")}</h3>
                    <Badge className="bg-[#0a9daa] dark:bg-teal-600">Q2 2023</Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{t("dashboard.phase1Desc")}</p>
                </CardContent>
              </Card>

              <Card className="border border-[#e0f0f2] bg-[#e8f6f8] dark:bg-gray-700 dark:border-gray-600">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">{t("dashboard.phase2")}</h3>
                    <Badge className="bg-[#0a9daa] dark:bg-teal-600">Q4 2023</Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{t("dashboard.phase2Desc")}</p>
                </CardContent>
              </Card>

              <Card className="border border-[#e0f0f2] bg-[#e8f6f8] dark:bg-gray-700 dark:border-gray-600">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">{t("dashboard.phase3")}</h3>
                    <Badge className="bg-[#0a9daa] dark:bg-teal-600">2024-2025</Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{t("dashboard.phase3Desc")}</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                className="bg-[#8cc63f] hover:bg-[#7ab535] dark:bg-green-600 dark:hover:bg-green-700"
                onClick={handleDetailedScheduleClick}
              >
                {t("dashboard.viewDetailedSchedule")}
              </Button>
            </div>
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
