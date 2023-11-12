export const previewStyles = `
    :root { --main-bg-color: #1e1e1e; --dark-theme-bg-color: #1e1e1e; --dark-theme-font-color: #fafafa; --light-theme-bg-color: #f3f3f3; --light-theme-font-color: #424242; }
    body { margin: 0; padding: 0; font-family: arial, sans-serif; border-collapse: collapse; width: 100%; background: var(--main-bg-color); font-size: 1rem; }
    .theme-review { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr; }
    .theme-review ul { list-style: none; padding: 0; margin: 0; }
    .theme-container { padding: 20px; }
    .theme-container > h2 { font-size: 1.25rem; margin-top: 0; }
    .theme-container.dark { color: var(--dark-theme-font-color); background: var(--dark-theme-bg-color); }
    .theme-container.light { color: var(--light-theme-font-color); background: var(--light-theme-bg-color); }
    .icon { display: flex; align-items: center; }
    .icon-preview { content: " "; background-size: 16px; background-position: 0; background-repeat: no-repeat; padding-right: 6px; width: 16px; height: 22px; }
    .icon > span { font-size: 13px; }
`;
