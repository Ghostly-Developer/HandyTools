import { useEffect, useState } from 'react'
import { Coffee, Heart, X } from 'lucide-react'

type BuyMeCoffeeProps = {
	isOpen: boolean
	onClose: () => void
}

const coffeeOptions = [
	{ amount: '$3', name: '1 Espresso' },
	{ amount: '$5', name: 'Cappuccino' },
	{ amount: '$10', name: 'Developer Boost' },
]

export default function BuyMeCoffee({ isOpen, onClose }: BuyMeCoffeeProps) {
	const [selectedAmount, setSelectedAmount] = useState('$5')

	useEffect(() => {
		if (!isOpen) return

		const closeWithEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose()
		}

		document.addEventListener('keydown', closeWithEscape)
		return () => document.removeEventListener('keydown', closeWithEscape)
	}, [isOpen, onClose])

	if (!isOpen) return null

	return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
		if (event.target === event.currentTarget) onClose()
	}}>
		<section className="coffee-modal" role="dialog" aria-modal="true" aria-labelledby="coffee-title">
			<header className="coffee-modal-header">
				<div className="coffee-modal-heading">
					<div className="coffee-modal-icon"><Coffee size={18} aria-hidden="true" /></div>
					<h2 id="coffee-title">Support DevTools Pro</h2>
				</div>
				<button className="modal-close" type="button" onClick={onClose} aria-label="Close support dialog"><X size={19} aria-hidden="true" /></button>
			</header>
			<div className="coffee-modal-body">
				<p>DevTools Pro is open source, free of subscription paywalls, and built to empower software engineers worldwide. If it saved you time, consider buying a cup of coffee!</p>
				<div className="coffee-options">
					{coffeeOptions.map((option) => <button className={selectedAmount === option.amount ? 'coffee-option selected' : 'coffee-option'} type="button" key={option.amount} onClick={() => setSelectedAmount(option.amount)}>
						<Coffee size={17} aria-hidden="true" />
						<strong>{option.amount}</strong>
						<span>{option.name}</span>
					</button>)}
				</div>
				<button className="support-button" type="button"><Heart size={15} fill="currentColor" aria-hidden="true" /> Tip {selectedAmount} with Coffee</button>
			</div>
		</section>
	</div>
}
