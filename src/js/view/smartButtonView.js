const header = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.SECRETKEY}`,
  },
}

const buttonView = async (response, raffle, options) => {
  const $purchaseButton = document.getElementById(options.purchaseButtonId)
  if (response.status !== 200 && raffle.data[0].active !== true) {
    $purchaseButton.innerHTML = options.outOfStockText || 'Join Waitlist'
    $purchaseButton.href = `https://neongroup.hyper.co/waitlist`
  } else if (response.status !== 200) {
    $purchaseButton.innerHTML = options.entryRaffleText || 'Join Raffle'
    $purchaseButton.href = `https://neongroup.hyper.co/raffle/${raffle.data[0].id}`
  } else {
    const release = await response.json()

    if (release.out_of_stock)
      $purchaseButton.innerHTML = options.outOfStockText || 'Out Of Stock'
    else {
      $purchaseButton.innerHTML = options.inStockText || 'Purchase'
      $purchaseButton.href = release.link
    }
  }
}
const smartButtonStyleView = () => {
  const smartButton = document.querySelector('#purchaseButton')
  const buttonContent = smartButton.innerText

  smartButton.classList.remove('purchase')
  if (buttonContent.startsWith('Purchase') || buttonContent.startsWith('Enter'))
    smartButton.classList.add('purchase')
}

export const metaLabs = async function MetaLabs(portalUrl, options) {
  const res = await fetch(
    `https://${portalUrl}/api/release${window.location.search}`
  )
  const raffleData = await (
    await fetch('https://api.hyper.co/v6/raffles', header)
  ).json()
  await buttonView(res, raffleData, options)
  smartButtonStyleView()
}
