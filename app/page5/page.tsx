"use client"

import { ArrowLeft, Activity, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function Page5() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#e8f1f4] dark:bg-gray-900">
      <main className="container mx-auto py-8 px-4">
        <Link href="/" className="inline-flex items-center text-[#0a9daa] dark:text-teal-400 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("back.overview")}
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="h-48 bg-[#0a9daa] dark:bg-teal-800 relative">
            <div className="absolute left-6 top-6">
              <div className="text-white">
                <h1 className="text-2xl font-bold">{t("quality.title")}</h1>
                <p className="text-sm opacity-80">{t("quality.subtitle")}</p>
              </div>
            </div>
            <div className="absolute right-6 top-6">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Medical professionals"
                width={120}
                height={120}
                className="opacity-70"
              />
            </div>
            <div className="absolute right-0 bottom-0 opacity-20">
              <div className="w-40 h-40 rounded-full bg-[#7dd0d8] dark:bg-teal-700"></div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="bg-[#e8f6f8] dark:bg-gray-700 p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#0a9daa] dark:text-teal-400">{t("health.digitalCare")}</h2>
                    <Badge className="bg-[#8cc63f] hover:bg-[#7ab535] dark:bg-green-600 dark:hover:bg-green-700">
                      {t("health.priority")}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{t("health.description")}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-2 border-[#0a9daa] dark:border-teal-500 pl-3">
                      <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">{t("health.diagnosis")}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{t("health.diagnosis.desc")}</p>
                    </div>

                    <div className="border-l-2 border-[#0a9daa] dark:border-teal-500 pl-3">
                      <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">{t("health.therapy")}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{t("health.therapy.desc")}</p>
                    </div>

                    <div className="border-l-2 border-[#0a9daa] dark:border-teal-500 pl-3">
                      <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">{t("health.aftercare")}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">{t("health.aftercare.desc")}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h3 className="font-medium text-[#0a9daa] dark:text-teal-400 mb-2">{t("health.implementation")}</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-300">{t("health.diagnosisTools")}</span>
                          <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">85%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-600 rounded-full">
                          <div className="h-2 w-[85%] bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {t("health.therapyManagement")}
                          </span>
                          <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">70%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-600 rounded-full">
                          <div className="h-2 w-[70%] bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {t("health.aftercarePlatform")}
                          </span>
                          <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">60%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 dark:bg-gray-600 rounded-full">
                          <div className="h-2 w-[60%] bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="bg-[#8cc63f] dark:bg-green-700 text-white border-0 mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold mb-4">{t("health.benefits")}</h2>

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
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5">•</div>
                        <p>{t("health.benefit4")}</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold text-[#0a9daa] dark:text-teal-400 mb-4">
                      {t("health.nextSteps")}
                    </h2>

                    <div className="space-y-4">
                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">{t("health.q3")}</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{t("health.q3.desc")}</p>
                      </div>

                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">{t("health.q4")}</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{t("health.q4.desc")}</p>
                      </div>

                      <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                        <h3 className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">{t("health.q1")}</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">{t("health.q1.desc")}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button className="bg-[#0a9daa] hover:bg-[#088a96] dark:bg-teal-700 dark:hover:bg-teal-800">
                {t("health.detailedInfo")} <ChevronRight className="ml-2 h-4 w-4" />
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
