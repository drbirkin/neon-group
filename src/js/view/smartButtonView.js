const header = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.SECRETKEY}`,
  },
}

const buttonView = async (response, options) => {
  console.log(process.env.SECRETKEY)
  const $purchaseButton = document.getElementById(options.purchaseButtonId)
  // console.log(await response)
  const { data } = await response
  if (data.length === 0) {
    $purchaseButton.innerHTML = options.outOfStockText || 'Out Of Stock'
    $purchaseButton.href = ''
    $purchaseButton.classList.remove('purchase')
  } else {
    $purchaseButton.innerHTML =
      `${options.inStockText} $${data[0].renewal_price}/Month` || 'Purchase'
    $purchaseButton.href = data[0].direct_link
    $purchaseButton.classList.add('purchase')
  }
}

export const metaLabs = async function MetaLabs(portalUrl, options) {
  const res = await fetch(
    `https://${portalUrl}/api/v2/plans?visibility=visible`,
    header
  )
  await buttonView(res.json(), options)
}
