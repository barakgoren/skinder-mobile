import { translations } from "../../assets/translations"

export default function useTranslation() {

    const translate = (key: string) => {
        const keys = key.split('.')

        return (
            getNestedTranslation('en', keys) ??
            key
        )
    }

    return {
        t: translate,
    }
}

export function getNestedTranslation(
    language: 'en',
    keys: string[]
): string {
    return keys.reduce((obj: any, key: string) => {
        return obj?.[key]
    }, translations[language])
}
