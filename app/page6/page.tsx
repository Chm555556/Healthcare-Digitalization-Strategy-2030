"use client"

import { useState } from "react"
import { ArrowLeft, Activity, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function Page6() {
  const { t } = useLanguage()
  const [showQualityReport, setShowQualityReport] = useState(false)

  const handleQualityReportClick = () => {
    setShowQualityReport(true)
    // In a real application, this would download or display a quality report
    alert("Qualitätsbericht wird heruntergeladen")
  }

  return (
    <div className="min-h-screen bg-[#e8f1f4] dark:bg-gray-900">
      <main className="container mx-auto py-8 px-4 pt-20">
        <Link href="/" className="inline-flex items-center text-[#0a9daa] dark:text-teal-400 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("back.overview")}
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-[#0a9daa] dark:text-teal-400">{t("health.title")}</h1>
              <div className="bg-[#e8f6f8] dark:bg-gray-700 p-3 rounded-lg">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Quality icon"
                  width={50}
                  height={50}
                  className="opacity-80"
                />
              </div>
            </div>

            <div className="bg-[#0a9daa] dark:bg-teal-800 text-white p-4 rounded-lg mb-6">
              <h2 className="font-medium">{t("health.digitalCare")}</h2>
              <p className="text-sm mt-1 opacity-80">{t("health.description")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0">
                <CardContent className="p-4">
                  <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">{t("health.diagnosis")}</h3>
                  <div className="flex items-center justify-center mt-4">
                    <div className="h-24 w-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#0a9daa] dark:text-teal-400">99.8%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-4 text-center">
                    {t("health.diagnosis.desc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0">
                <CardContent className="p-4">
                  <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">{t("health.therapy")}</h3>
                  <div className="flex items-center justify-center mt-4">
                    <div className="h-24 w-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#0a9daa] dark:text-teal-400">&lt; 2s</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-4 text-center">
                    {t("health.therapy.desc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0">
                <CardContent className="p-4">
                  <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">{t("health.aftercare")}</h3>
                  <div className="flex items-center justify-center mt-4">
                    <div className="h-24 w-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#0a9daa] dark:text-teal-400">4.7/5</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-4 text-center">
                    {t("health.aftercare.desc")}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-[#8cc63f] dark:bg-green-700 text-white border-0">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-4">{t("health.benefits")}</h2>
                  <p className="text-sm mb-4">{t("health.description")}</p>

                  <ul className="text-sm space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5">•</div>
                      <p>{t("health.benefit1")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5">•</div>
                      <p>{t("health.benefit2")}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="min-w-4 h-4 mt-0.5">•</div>
                      <p>{t("health.benefit3")}</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-4">
                <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">{t("health.implementation")}</h3>
                    <div className="mt-2 space-y-2">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-300">{t("health.diagnosisTools")}</span>
                          <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">95%</span>
                        </div>
                        <div className="h-2 w-full bg-white dark:bg-gray-800 rounded-full">
                          <div className="h-2 w-[95%] bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {t("health.therapyManagement")}
                          </span>
                          <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">0.2%</span>
                        </div>
                        <div className="h-2 w-full bg-white dark:bg-gray-800 rounded-full">
                          <div className="h-2 w-[0.2%] bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {t("health.aftercarePlatform")}
                          </span>
                          <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">99.9%</span>
                        </div>
                        <div className="h-2 w-full bg-white dark:bg-gray-800 rounded-full">
                          <div className="h-2 w-[99.9%] bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">{t("health.nextSteps")}</h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-xs font-bold text-[#0a9daa] dark:text-teal-400">ISO</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300">ISO 27001</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-xs font-bold text-[#0a9daa] dark:text-teal-400">GDPR</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300">{t("health.q3.desc")}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-xs font-bold text-[#0a9daa] dark:text-teal-400">TÜV</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300">{t("health.q4.desc")}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                className="bg-[#0a9daa] hover:bg-[#088a96] dark:bg-teal-700 dark:hover:bg-teal-800"
                onClick={handleQualityReportClick}
              >
                {t("download.report")} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

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
