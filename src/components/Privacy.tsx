import { useEffect } from 'react'
import { LockKeyhole, X } from 'lucide-react'

type PrivacyProps = {
	isOpen: boolean
	onClose: () => void
}

export default function Privacy({ isOpen, onClose }: PrivacyProps) {
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
		<section className="about-modal privacy-modal" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
			<header className="about-modal-header">
				<div className="about-modal-icon"><LockKeyhole size={19} aria-hidden="true" /></div>
				<div>
					<h2 id="privacy-title">Privacy Policy</h2>
				</div>
				<button className="modal-close" type="button" onClick={onClose} aria-label="Close privacy policy">
					<X size={19} aria-hidden="true" />
				</button>
			</header>
			<div className="about-modal-body privacy-modal-body">
				<p><strong>Handy Tools is designed to process tool content in your browser.</strong> This Privacy Policy describes the information involved when you visit or use the service. It applies to this website and its browser-based tools, unless a tool clearly says otherwise.</p>
				<h3>Tool content</h3>
				<p>Text, code, files, images, and other content you enter or select are processed locally by the selected tool. We do not intentionally receive, store, review, or sell that content on our servers. Do not submit content that you are not authorized to use or that you cannot risk exposing.</p>
				<h3>Technical information</h3>
				<p>Like most websites, the hosting provider or network infrastructure may process limited technical information needed to deliver the site, such as an IP address, browser type, device information, requested files, and timestamps. This information may appear in security or operational logs and is handled according to the provider's terms and retention practices.</p>
				<h3>Local storage and cookies</h3>
				<p>Handy Tools does not require an account. The site may use browser storage for preferences or tool state when a feature needs it. You can clear this data through your browser settings. If cookies, analytics, advertising, or other tracking are added later, this policy will be updated before or when those features are introduced.</p>
				<h3>External services</h3>
				<p>A tool may link to or send data to an external service only when you choose an action that requires it. External services are independent of Handy Tools and have their own privacy policies, security practices, and terms. Review their policies before sending information, and do not assume that our local-processing protections apply there.</p>
				<h3>Security limits</h3>
				<p>Local processing can reduce transmission risk, but no website, browser, device, or internet connection is completely secure. We do not guarantee uninterrupted availability, error-free results, or absolute security. Keep your browser and device updated, use trusted devices, and avoid entering passwords, API keys, financial information, health information, or other highly sensitive data.</p>
				<h3>Children and legal rights</h3>
				<p>Handy Tools is not directed at children who are below the minimum age required to use online services in their location. If you believe personal information has been provided to us through the service, contact the maintainer so it can be reviewed. Depending on your location, you may have rights to request access, correction, deletion, or information about processing.</p>
				<h3>Policy changes and contact</h3>
				<p>We may revise this policy when the service, its providers, or applicable requirements change. Continued use after a change means you acknowledge the revised policy. For privacy questions or requests, contact the Handy Tools maintainer through the project's published repository or support channel.</p>
				<p className="privacy-disclaimer"><strong>Important:</strong> This policy is not a substitute for legal advice and does not replace appropriate Terms of Use, consent notices, vendor agreements, or security procedures. Have it reviewed for the jurisdictions and data practices that apply to your deployment.</p>
			</div>
			<footer className="about-modal-footer"><span>Your data stays in your browser <LockKeyhole size={12} aria-hidden="true" /></span><button type="button" onClick={onClose}>Close</button></footer>
		</section>
	</div>
}
