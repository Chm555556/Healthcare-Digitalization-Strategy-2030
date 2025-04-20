"use client"

import { ArrowLeft, Activity, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function Page3() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#e8f1f4] dark:bg-gray-900">
      <main className="container mx-auto py-8 px-4">
        <Link href="/" className="inline-flex items-center text-[#0a9daa] dark:text-teal-400 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t("back.overview")}
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="h-48 bg-[#8cc63f] dark:bg-green-700 relative">
            <div className="absolute right-0 top-0">
              <div className="border-l-[100px] border-l-transparent border-t-[200px] border-t-white dark:border-t-gray-800 w-0 h-0"></div>
            </div>
            <div className="absolute left-6 bottom-6">
              <h1 className="text-2xl font-bold text-white">{t("coreProjects.title")}</h1>
              <p className="text-white text-sm opacity-80">{t("coreProjects.subtitle")}</p>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0 h-full">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-[#0a9daa] dark:text-teal-400">
                      {t("coreProjects.telemedicine")}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t("coreProjects.telemed.desc")}</p>

                    <ul className="text-sm space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.telemed.point1")}</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.telemed.point2")}</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.telemed.point3")}</p>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <div className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">
                        {t("coreProjects.progress")}
                      </div>
                      <div className="h-2 w-full bg-white dark:bg-gray-600 mt-2 rounded-full">
                        <div className="h-2 w-2/3 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>0%</span>
                        <span>67%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0 h-full">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-[#0a9daa] dark:text-teal-400">
                      {t("coreProjects.patientPortal")}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t("coreProjects.portal.desc")}</p>

                    <ul className="text-sm space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.portal.point1")}</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.portal.point2")}</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.portal.point3")}</p>
                      </li>
                    </ul>

                    <div className="mt-6">
                      <div className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">
                        {t("coreProjects.progress")}
                      </div>
                      <div className="h-2 w-full bg-white dark:bg-gray-600 mt-2 rounded-full">
                        <div className="h-2 w-4/5 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>0%</span>
                        <span>80%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-6">
              <Card className="bg-[#e8f6f8] dark:bg-gray-700 border-0">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-[#0a9daa] dark:text-teal-400">
                    {t("coreProjects.electronicRecord")}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{t("coreProjects.record.desc")}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="text-sm space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.record.point1")}</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.record.point2")}</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="min-w-4 h-4 mt-0.5 text-[#0a9daa] dark:text-teal-400">•</div>
                        <p>{t("coreProjects.record.point3")}</p>
                      </li>
                    </ul>

                    <div>
                      <div className="text-sm font-medium text-[#0a9daa] dark:text-teal-400">
                        {t("coreProjects.progress")}
                      </div>
                      <div className="h-2 w-full bg-white dark:bg-gray-600 mt-2 rounded-full">
                        <div className="h-2 w-1/2 bg-[#0a9daa] dark:bg-teal-500 rounded-full"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>

                      <div className="mt-4 p-3 bg-[#8cc63f] dark:bg-green-700 text-white rounded-lg">
                        <h3 className="font-medium text-sm">{t("coreProjects.priority")}</h3>
                        <p className="text-xs mt-1">{t("coreProjects.completion")}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex justify-end">
              <Button className="bg-[#8cc63f] hover:bg-[#7ab535] dark:bg-green-700 dark:hover:bg-green-800">
                {t("coreProjects.viewDetailedPlan")} <ChevronRight className="ml-2 h-4 w-4" />
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
