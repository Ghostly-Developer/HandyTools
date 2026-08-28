import { useState } from 'react'
import { ArrowDownToLine } from 'lucide-react'
import Sidebar from '../components/Sidebar.tsx'
import { defaultTool, type ToolDefinition, type ToolSetting, tools } from './toolCatalog.ts'
import Compare from './text/Compare.tsx'

type SettingValue = string | boolean | number
type SettingValues = Record<string, SettingValue>

function getDefaultValues(settings: ToolSetting[]): SettingValues {
  return Object.fromEntries(settings.map((setting) => [setting.id, setting.defaultValue]))
}

export default function ToolWorkspace() {
  const [currentTool, setCurrentTool] = useState<ToolDefinition>(defaultTool)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => window.matchMedia('(max-width: 760px)').matches)
  const [settings, setSettings] = useState<SettingValues>(() => getDefaultValues(defaultTool.settings))

  const selectTool = (tool: ToolDefinition) => {
    setCurrentTool(tool)
    setSettings(getDefaultValues(tool.settings))
  }

  const updateSetting = (id: string, value: SettingValue) => {
    setSettings((current) => ({ ...current, [id]: value }))
  }

  return (
    <div className={`workspace-layout${isSidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
      <Sidebar
        currentTool={currentTool}
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed((collapsed) => !collapsed)}
        settings={settings}
        onSettingChange={updateSetting}
        similarTools={tools.filter((tool) => tool.id !== currentTool.id)}
        onSelectTool={selectTool}
      />
      {currentTool.id === 'compare' ? <Compare /> : <section className="tool-workspace" aria-labelledby="workspace-title">
        <div className="workspace-heading">
          <div>
            <p className="workspace-kicker">{currentTool.category} tools</p>
            <h2 id="workspace-title">{currentTool.label}</h2>
            <p>{currentTool.description}</p>
          </div>
        </div>
        <div className="tool-panel">
          <div className="tool-panel-header">
            <span>Input</span>
            <button type="button" className="panel-action"><ArrowDownToLine size={14} aria-hidden="true" /> Load file</button>
          </div>
          <textarea aria-label={`${currentTool.label} input`} placeholder="Paste text or data here..." />
        </div>
      </section>}
    </div>
  )
}
