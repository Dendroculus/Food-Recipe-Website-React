const USD_RATE = 16000;

export function parseIdrToNumber(idrString) {
  const clean = String(idrString || "")
    .replace(/[^\d.,-]/g, "") 
    .replace(/\./g, "")      
    .replace(",", ".");       
  return Number(clean) || 0;
}
export function idrToUsd(idrValue) {
  return idrValue / USD_RATE;
}

export function formatUsd(n) {
  return `$${Number(n || 0).toFixed(2)}`;
}

export function formatIdr(n) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(n || 0));
}