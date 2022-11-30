import { useTheme } from "../hooks/useTheme";
import './ThemeSelector.css'
import modeIcon from '../assets/sun.svg'

const themeColors = ['#effaf0', '#75ad81']

function ThemeSelector() {

    const { changeMode, changeColor, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log(mode)

    return (
        <div className="theme-selector">
            <div className='mode-toggle'>
                <img
                    onClick={toggleMode}
                    src={modeIcon}
                    alt='dark/light icon'
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                />
            </div>

            <div className='theme-buttons'>
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    )
}
export default ThemeSelector;