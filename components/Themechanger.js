import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = [
    { name: 'Blue' },
    { name: 'Green' },
    { name: 'Dark' },
];

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div>
            <label htmlFor='theme-select' className='sr-only mr-2'>
                Choose theme:
            </label>
            <select
                name='theme'
                id='theme-select'
                className='rounded-lg bg-th-title-10 text-th-text border-th-bg-30 border py-1 px-3'
                onChange={(e) => setTheme(e.currentTarget.value)}
                value={theme}
            >
                <option value=''>Select Theme</option>
                {themes.map((t) => (
                    <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
                        {t.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ThemeChanger;
