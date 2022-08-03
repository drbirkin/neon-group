const header = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.SECRETKEY}`,
  },
}

const buttonView = async (response, raffleData, options) => {
  const $purchaseButton = document.getElementById(options.purchaseButtonId)

  if (response.status !== 200 && raffleData.status !== 200) {
    $purchaseButton.innerHTML = options.outOfStockText || 'Join Waitlist'
    const raffle = await raffleData.json()
    $purchaseButton.href = `https://neongroup.hyper.co/raffle/${raffle.data[0].id}`
  } else if (response.status !== 200) {
    $purchaseButton.innerHTML = options.entryRaffleText || 'Join Raffle'
    const raffle = await raffleData.json()
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
  // smartButton.removeAttribute('href')
  if (buttonContent.startsWith('Purchase') || buttonContent.startsWith('Enter'))
    smartButton.classList.add('purchase')
  // else if (buttonContent.startsWith('OOS'))
  //   smartButton.setAttribute('href', 'https://forms.gle/Sr5LqFtBsG3ETwUJ8')
  // else smartButton.setAttribute('href', '404.html')
  // console.log(smartButton.innerText.startsWith('Purchase'))
}

export const metaLabs = async function MetaLabs(portalUrl, options) {
  const res = await fetch(
    `https://${portalUrl}/api/release${window.location.search}`
  )
  const raffleData = await fetch('https://api.hyper.co/v6/raffles', header)
  await buttonView(res, raffleData, options)
  smartButtonStyleView()
}
