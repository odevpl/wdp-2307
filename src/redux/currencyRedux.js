// actions
export const SET_CURRENCY = 'SET_CURRENCY';

export const setCurrency = currency => ({
  type: SET_CURRENCY,
  payload: { currency, conversionRates: initialCurrency.conversionRates },
});

const initialCurrency = {
  currency: 'USD',
  conversionRates: {
    USD: 1,
    EUR: 0.85,
    PLN: 3.94,
  },
  convertedPrice: null,
};

export default function currencyReducer(state = initialCurrency, action) {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload.currency,
        conversionRates: action.payload.conversionRates,
      };
    default:
      return state;
  }
}
