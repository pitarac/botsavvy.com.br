import { guessIfUserIsEuropean } from './guessIfUserIsEuropean'

type FormatPriceParams = {
  currency?: 'brl' | 'usd'
  maxFractionDigits?: number
}

export const formatPrice = (
  price: number,
  { currency, maxFractionDigits = 0 }: FormatPriceParams = {
    maxFractionDigits: 0,
  }
) => {
  const isEuropean = guessIfUserIsEuropean()
  const formatter = new Intl.NumberFormat(isEuropean ? 'pt_BR' : 'en-US', {
    style: 'currency',
    currency: currency?.toUpperCase() ?? (isEuropean ? 'BRL' : 'USD'),
    maximumFractionDigits: maxFractionDigits,
  })
  return formatter.format(price)
}
