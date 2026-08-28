import { useEffect } from 'react'
import { Cpu, Heart, ShieldCheck, Terminal, X } from 'lucide-react'

type AboutProps = {
	isOpen: boolean
	onClose: () => void
}

export default function About({ isOpen, onClose }: AboutProps) {
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
		<section className="about-modal" role="dialog" aria-modal="true" aria-labelledby="about-title">
			<header className="about-modal-header">
				<div className="about-modal-icon"><Terminal size={19} aria-hidden="true" /></div>
				<div>
					<h2 id="about-title">About DevTools Pro</h2>
					<p>Version 2.4.0 · Kinetic Dark Edition</p>
				</div>
				<button className="modal-close" type="button" onClick={onClose} aria-label="Close about dialog">
					<X size={19} aria-hidden="true" />
				</button>
			</header>
			<div className="about-modal-body">
				<p><strong>DevTools Pro</strong> is a zero-latency, private, client-side utility suite crafted specifically for modern software engineers, DevOps teams, and technical writers.</p>
				<div className="about-features">
					<div className="about-feature"><ShieldCheck size={16} aria-hidden="true" /><div><strong>100% Client-Side</strong><p>Your code, tokens, and documents never leave your browser sandbox.</p></div></div>
					<div className="about-feature"><Cpu size={16} aria-hidden="true" /><div><strong>Sub-Millisecond Diffs</strong><p>High-efficiency diff algorithms with synchronized side-by-side rendering.</p></div></div>
				</div>
				<strong className="built-with-label">Built With:</strong>
				<div className="technology-list"><span>React 19</span><span>Tailwind CSS v4</span><span>TypeScript</span><span>Geist &amp; JetBrains Mono</span></div>
			</div>
			<footer className="about-modal-footer"><span>Engineered with <Heart size={12} fill="currentColor" aria-hidden="true" /> for developers</span><button type="button" onClick={onClose}>Close</button></footer>
		</section>
	</div>
}
