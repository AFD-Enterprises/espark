import React from 'react';
import "@material/web/list/list";
import "@material/web/list/list-item";
import "@material/web/divider/divider";
import "@material/web/icon/icon";
import "@material/web/fab/fab";
import "@material/web/fab/branded-fab";

type webComponent = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'md-list': webComponent;
            'md-list-item': webComponent;
            'md-divider': webComponent;
            'md-icon': webComponent;
            'md-fab': webComponent;
            'md-icon-button': webComponent;
        }
    }
}

export type SidebarItem = {
    icon: string;
    label: string;
    link?: string;
    action?: () => void;
}

interface SidebarProps {
    /**
     * Items
     */
    items: SidebarItem[];

    /**
     * Fab button action
     */
    fabAction?: () => void;

    /**
     * Fab button icon
     */
    fabIcon?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Sidebar = ({
    items,
    ...props
}: SidebarProps) => {
    return (
        <>
            <div className='sidebar'>
                <md-list className='top'>
                    <i className='material-icons sidebar-icon'>menu</i>
                    <md-fab {...props}>
                        <i className='material-icons sidebar-icon' slot='icon'>robot</i>
                    </md-fab>
                </md-list>
                <md-list>
                    {items.map((item, index) => (
                        <md-list-item key={index} onClick={item.action}>
                            <i className='material-icons sidebar-icon'>{item.icon}</i>
                            <span>{item.label}</span>
                        </md-list-item>
                    ))}
                </md-list>
            </div>
        </>
    );
}