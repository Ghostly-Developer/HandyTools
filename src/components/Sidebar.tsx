import { ChevronRight, PanelLeftClose, PanelLeftOpen, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'
import type { ToolDefinition, ToolSetting } from '../tools/toolCatalog.ts'

type SettingValue = string | boolean | number

type SidebarProps = {
  currentTool: ToolDefinition
  isCollapsed: boolean
  onToggle: () => void
  settings: Record<string, SettingValue>
  onSettingChange: (id: string, value: SettingValue) => void
  similarTools: ToolDefinition[]
  onSelectTool: (tool: ToolDefinition) => void
}

function SettingControl({ setting, value, onChange }: { setting: ToolSetting; value: SettingValue; onChange: (value: SettingValue) => void }) {
  if (setting.type === 'toggle') return <input type="checkbox" checked={value === true} onChange={(event) => onChange(event.target.checked)} />
  if (setting.type === 'select') return <select value={String(value)} onChange={(event) => onChange(event.target.value)} aria-label={setting.label}>{setting.options.map((option) => <option key={option}>{option}</option>)}</select>

  return <input type={setting.type} value={String(value)} min={setting.type === 'number' ? setting.min : undefined} max={setting.type === 'number' ? setting.max : undefined} placeholder={setting.type === 'text' ? setting.placeholder : undefined} onChange={(event) => onChange(setting.type === 'number' ? Number(event.target.value) : event.target.value)} aria-label={setting.label} />
}

export default function Sidebar({ currentTool, isCollapsed, onToggle, settings, onSettingChange, similarTools, onSelectTool }: SidebarProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(true)

  return (
    <aside className={`tool-sidebar tool-${currentTool.id}${isCollapsed ? ' is-collapsed' : ''}`} aria-label="Tool navigation">
      <button className="sidebar-collapse-button" type="button" onClick={onToggle} aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'} title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
        {isCollapsed ? <PanelLeftOpen size={16} aria-hidden="true" /> : <PanelLeftClose size={16} aria-hidden="true" />}
      </button>
      <section className="sidebar-current">
        <p className="sidebar-eyebrow">Current tool</p>
        <div className="current-tool-summary">
          <div className="current-tool-icon"><currentTool.icon size={20} aria-hidden="true" /></div>
          <div><h1>{currentTool.label}</h1><p>{currentTool.description}</p></div>
        </div>
      </section>

      <section className="sidebar-section sidebar-config" aria-labelledby="tool-config-title">
        <button className="sidebar-section-heading sidebar-section-toggle" type="button" onClick={() => setIsSettingsOpen((open) => !open)} aria-expanded={isSettingsOpen}>
          <SlidersHorizontal size={14} aria-hidden="true" /><h2 id="tool-config-title">Tool configuration</h2><ChevronRight size={14} aria-hidden="true" />
        </button>
        {isSettingsOpen && <div className="setting-list">{currentTool.settings.map((setting) => <label className={`sidebar-setting sidebar-setting-${setting.type}`} key={setting.id}>
          <span><strong>{setting.label}</strong><small>{setting.description}</small></span>
          <SettingControl setting={setting} value={settings[setting.id]} onChange={(value) => onSettingChange(setting.id, value)} />
        </label>)}</div>}
      </section>

      <section className="sidebar-section sidebar-similar" aria-labelledby="similar-tools-title">
        <div className="sidebar-section-heading"><SlidersHorizontal size={14} aria-hidden="true" /><h2 id="similar-tools-title">Similar tools</h2><span className="sidebar-count">{similarTools.length}</span></div>
        <div className="similar-tool-list">{similarTools.map((tool) => <button className="similar-tool" type="button" key={tool.id} onClick={() => onSelectTool(tool)}>
          <tool.icon size={16} aria-hidden="true" /><span><strong>{tool.label}</strong><small>{tool.description}</small></span><ChevronRight size={14} aria-hidden="true" />
        </button>)}</div>
      </section>
    </aside>
  )
}
