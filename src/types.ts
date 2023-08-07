export interface ListItem {
    id: number;
    text: string;
}

export interface RowProps extends ListItem {
    onClickHandler: (item: ListItem) => void;
}