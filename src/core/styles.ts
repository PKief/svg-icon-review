export const previewStyles = `
    :root { --main-bg-color: #1e1e1e; --dark-theme-bg-color: #1e1e1e; --dark-theme-font-color: #fafafa; --light-theme-bg-color: #f3f3f3; --light-theme-font-color: #424242; }
    body { margin: 0; padding: 0; font-family: arial, sans-serif; border-collapse: collapse; width: 100%; background: var(--main-bg-color); font-size: 2rem; }
    .theme-review { display: grid; grid-template-columns: 2fr 2fr; grid-template-rows: 2fr; width: 3200px; }
    .theme-review ul { list-style: none; padding: 0; margin: 0; }
    .theme-review ul > li { line-height: 1.5;}
    .theme-review ul > li.with-big-icon { line-height: 3;}
    .theme-container { padding: 4rem; }
    .theme-container > h2 { font-size: 4rem; margin-top: 0; }
    .theme-container.dark { color: var(--dark-theme-font-color); background: var(--dark-theme-bg-color); }
    .theme-container.dark .divider { background: var(--dark-theme-font-color); }
    .theme-container.light { color: var(--light-theme-font-color); background: var(--light-theme-bg-color); }
    .theme-container.light .divider { background: var(--light-theme-font-color); }
    .icon { display: grid; align-items: center; white-space: nowrap; grid-template-columns: 64px auto; gap: 20px; }
    .icon.with-big-icon { grid-template-columns: 128px 64px 64px auto; }
    .icon-preview { content: ' '; background-size: 128px; background-position: 0; background-repeat: no-repeat; width: 128px; height: 128px; }
    .divider { height: 75%; width: 4px; justify-self: center; border-radius: 16px; }
    .icon-preview-small { content: ' '; background-size: 64px; background-position: 0; background-repeat: no-repeat; width: 64px; height: 64px; filter: blur(1px); }
    .icon > span { font-size: 52px; text-overflow: ellipsis; overflow: hidden; }
`;
