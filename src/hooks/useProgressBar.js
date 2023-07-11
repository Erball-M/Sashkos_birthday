import { useMemo } from "react"

export const useProgressBar = (currentStep, stepsCount) => {
    const progressPercent = useMemo(() => {
        const handledCurrentStep = currentStep + 1
        const res = ((handledCurrentStep - 1) / (stepsCount - 1) * 100)
        return res
    }, [currentStep, stepsCount])
    return progressPercent
}