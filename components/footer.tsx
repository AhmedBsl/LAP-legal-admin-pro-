"use client"

import { useLanguage } from "@/components/language-provider"
import Logo from "@/components/logo"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
              <h3 className="text-lg font-bold">{t("footer.title")}</h3>
            </div>
            <p className="text-sm opacity-90">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <p className="text-sm opacity-90">{t("footer.email")}</p>
            <p className="text-sm opacity-90">{t("footer.phone")}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="text-sm space-y-2 opacity-90">
              <li>{t("footer.services.documents")}</li>
              <li>{t("footer.services.translation")}</li>
              <li>{t("footer.services.procedures")}</li>
              <li>{t("footer.services.books")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
