import { ArrowLeftRight, Copy, Download, Edit3, Eye, FileCode2, Play, RotateCcw } from 'lucide-react'
import { useState } from 'react'

const originalSample = `interface UserConfig {
	id: string;
	name: string;
	role: 'admin' | 'user';
	active: boolean;
}

export function authorize(user: UserConfig) {
	if (!user.active) return false;
	return user.role === 'admin';
}`

const modifiedSample = `interface UserConfig {
	id: string;
	name: string;
	role: 'admin' | 'manager' | 'user';
	active: boolean;
	permissions?: string[];
}

export function authorize(user: UserConfig) {
	if (!user.active) return false;
	if (user.role === 'admin') return true;
	return user.permissions?.includes('read_all') ?? false;
}`

export default function Compare() {
	const [original, setOriginal] = useState(originalSample)
	const [modified, setModified] = useState(modifiedSample)
	const [isDiffView, setIsDiffView] = useState(true)

	const clear = () => { setOriginal(''); setModified('') }
	const swap = () => { setOriginal(modified); setModified(original) }

	return (
		<section className="compare-workspace" aria-labelledby="compare-title">
			<div className="compare-toolbar">
				<button type="button" onClick={swap}><ArrowLeftRight size={14} aria-hidden="true" /> Swap</button>
				<button type="button" onClick={clear}><RotateCcw size={14} aria-hidden="true" /> Clear</button>
				<div className="compare-view-toggle">
					<button className={isDiffView ? 'is-active' : ''} type="button" onClick={() => setIsDiffView(true)}><Eye size={14} aria-hidden="true" /> Diff View</button>
					<button className={!isDiffView ? 'is-active' : ''} type="button" onClick={() => setIsDiffView(false)}><Edit3 size={14} aria-hidden="true" /> Edit Text</button>
				</div>
				<button type="button" className="compare-export"><Download size={14} aria-hidden="true" /> Export Patch</button>
				<div className="compare-summary"><span className="removed"><i />2 Removed</span><span className="added"><i />4 Added</span></div>
			</div>
			<div className="compare-panels">
				<Editor title="Original" value={original} onChange={setOriginal} readOnly={isDiffView} />
				<Editor title="Modified" value={modified} onChange={setModified} readOnly={isDiffView} />
			</div>
			<div className="compare-action-row"><button type="button" className="compare-run"><Play size={14} fill="currentColor" aria-hidden="true" /> Compare Now</button></div>
		</section>
	)
}

function Editor({ title, value, onChange, readOnly }: { title: string; value: string; onChange: (value: string) => void; readOnly: boolean }) {
	return <div className="compare-editor">
		<div className="compare-editor-header"><span><strong>{title}</strong><small>{value.split('\n').length} lines, {value.length} chars</small></span><span className="editor-icons"><FileCode2 size={14} aria-hidden="true" /><Copy size={14} aria-hidden="true" /></span></div>
		<textarea aria-label={`${title} text`} value={value} onChange={(event) => onChange(event.target.value)} readOnly={readOnly} spellCheck={false} />
	</div>
}
