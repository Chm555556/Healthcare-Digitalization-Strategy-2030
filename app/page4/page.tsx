"use client"

import { ArrowLeft, Activity, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function Page4() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#e8f1f4] dark:bg-gray-900">
      <main className="container mx-auto py-8 px-4">
        <Link href="/" className="inline-flex items-center text-[#0a9daa] dark:text-teal-400 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("back.overview")}
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="h-48 bg-[#0a9daa] dark:bg-teal-800 relative">
            <div className="absolute left-6 bottom-6">
              <div className="text-white">
                <h1 className="text-2xl font-bold">{t("digitalProgress.title")}</h1>
                <p className="text-sm opacity-80">{t("digitalProgress.subtitle")}</p>
              </div>
            </div>
            <div className="absolute right-6 top-6">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Digital icon"
                  width={80}
                  height={80}
                  className="opacity-80"
                />
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-20">
              <div className="w-40 h-40 rounded-full bg-[#7dd0d8] dark:bg-teal-700"></div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="bg-[#e8f6f8] dark:bg-gray-700 p-6 rounded-lg">
                  <h2 className="text-xl font-bold text-[#0a9daa] dark:text-teal-400">
                    {t("digitalProgress.progressReport")}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border-l-2 border-[#0a9daa] dark:border-teal-500 pl-3">
                      <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">
                        {t("digitalProgress.implementationLevel")}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 flex-1 bg-white dark:bg-gray-600 rounded-full">
                          <div className="h-2 w-3/4 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">75%</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                        {t("digitalProgress.implementationDesc")}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#0a9daa] dark:border-teal-500 pl-3">
                      <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">
                        {t("digitalProgress.userAcceptance")}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 flex-1 bg-white dark:bg-gray-600 rounded-full">
                          <div className="h-2 w-4/5 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">80%</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                        {t("digitalProgress.acceptanceDesc")}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#0a9daa] dark:border-teal-500 pl-3">
                      <h3 className="font-medium text-[#0a9daa] dark:text-teal-400">
                        {t("digitalProgress.efficiencyIncrease")}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 flex-1 bg-white dark:bg-gray-600 rounded-full">
                          <div className="h-2 w-2/3 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium text-[#0a9daa] dark:text-teal-400">65%</span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                        {t("digitalProgress.efficiencyDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium text-[#0a9daa] dark:text-teal-400 mb-2">
                      {t("digitalProgress.developmentOverTime")}
                    </h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <div className="h-32 relative">
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-600"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-600"></div>

                        <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">Q1</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Q2</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Q3</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Q4</span>
                        </div>

                        <div className="absolute left-[10%] bottom-[20%] h-[20%] w-4 bg-[#0a9daa] dark:bg-teal-500 rounded-sm"></div>
                        <div className="absolute left-[30%] bottom-[30%] h-[30%] w-4 bg-[#0a9daa] dark:bg-teal-500 rounded-sm"></div>
                        <div className="absolute left-[50%] bottom-[50%] h-[50%] w-4 bg-[#0a9daa] dark:bg-teal-500 rounded-sm"></div>
                        <div className="absolute left-[70%] bottom-[75%] h-[75%] w-4 bg-[#0a9daa] dark:bg-teal-500 rounded-sm"></div>

                        <div className="absolute left-[10%] bottom-[10%] h-[10%] w-4 bg-[#8cc63f] dark:bg-green-600 rounded-sm ml-6"></div>
                        <div className="absolute left-[30%] bottom-[40%] h-[40%] w-4 bg-[#8cc63f] dark:bg-green-600 rounded-sm ml-6"></div>
                        <div className="absolute left-[50%] bottom-[60%] h-[60%] w-4 bg-[#8cc63f] dark:bg-green-600 rounded-sm ml-6"></div>
                        <div className="absolute left-[70%] bottom-[80%] h-[80%] w-4 bg-[#8cc63f] dark:bg-green-600 rounded-sm ml-6"></div>
                      </div>

                      <div className="flex justify-center gap-6 mt-2">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-[#0a9daa] dark:bg-teal-500"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {t("digitalProgress.implementation")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-[#8cc63f] dark:bg-green-600"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-300">
                            {t("digitalProgress.efficiency")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0 h-full">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold text-[#0a9daa] dark:text-teal-400">
                      {t("digitalProgress.nextSteps")}
                    </h2>

                    <ul className="text-sm space-y-4 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">1.</div>
                        <div>
                          <p className="font-medium text-[#0a9daa] dark:text-teal-400">{t("digitalProgress.step1")}</p>
                          <p className="text-xs mt-1">{t("digitalProgress.step1Desc")}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">2.</div>
                        <div>
                          <p className="font-medium text-[#0a9daa] dark:text-teal-400">{t("digitalProgress.step2")}</p>
                          <p className="text-xs mt-1">{t("digitalProgress.step2Desc")}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">3.</div>
                        <div>
                          <p className="font-medium text-[#0a9daa] dark:text-teal-400">{t("digitalProgress.step3")}</p>
                          <p className="text-xs mt-1">{t("digitalProgress.step3Desc")}</p>
                        </div>
                      </li>
                    </ul>

                    <div className="mt-6 p-4 bg-[#8cc63f] dark:bg-green-700 text-white rounded-lg">
                      <h3 className="font-medium">{t("digitalProgress.schedule")}</h3>
                      <p className="text-xs mt-1">{t("digitalProgress.scheduleDesc")}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button className="bg-[#0a9daa] hover:bg-[#088a96] dark:bg-teal-700 dark:hover:bg-teal-800">
                {t("digitalProgress.downloadFullReport")} <ChevronRight className="ml-2 h-4 w-4" />
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
