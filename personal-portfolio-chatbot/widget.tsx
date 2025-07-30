import React from 'react';
import ReactDOM from 'react-dom/client';
import WidgetApp from './WidgetApp';

// Create a function to mount the widget
const mountChatWidget = (targetElement?: HTMLElement) => {
    const container = targetElement || document.createElement('div');
    
    if (!targetElement) {
        container.id = 'maneesh-chat-widget';
        document.body.appendChild(container);
    }

    const root = ReactDOM.createRoot(container);
    root.render(<WidgetApp />);
    
    return root;
};

// Auto-mount if not in a module environment
if (typeof window !== 'undefined' && !window.ManeeshChatWidget) {
    window.ManeeshChatWidget = {
        mount: mountChatWidget
    };
    
    // Auto-mount when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => mountChatWidget());
    } else {
        mountChatWidget();
    }
}

// Export for manual mounting
export { mountChatWidget };

// TypeScript declaration for window
declare global {
    interface Window {
        ManeeshChatWidget?: {
            mount: (target?: HTMLElement) => any;
        };
    }
}