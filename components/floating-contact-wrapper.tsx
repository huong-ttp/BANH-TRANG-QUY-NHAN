import { client } from "@/sanity/lib/client"
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries"

import FloatingContact from "./floating-contact"

export default async function FloatingContactWrapper() {
  const settings =
    await client.fetch(SITE_SETTINGS_QUERY)

  return (
    <FloatingContact
      settings={settings}
    />
  )
}