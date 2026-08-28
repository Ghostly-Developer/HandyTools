import { Heart } from 'lucide-react'
import { useState } from 'react'
import Privacy from './Privacy.tsx'

export default function Footer() {
	const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
	const currentYear = new Date().getFullYear()

	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<p className="footer-copy">Copyright {currentYear} Handy Tools</p>
				<nav className="footer-links" aria-label="Footer navigation">
					<button type="button" onClick={() => setIsPrivacyOpen(true)}>Privacy Policy</button>
				</nav>
				<p className="footer-privacy">Processed in your browser. <Heart className="footer-heart" size={12} fill="currentColor" aria-hidden="true" /> <strong>100% in-browser privacy</strong></p>
			</div>
			<Privacy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
		</footer>
	)
}
