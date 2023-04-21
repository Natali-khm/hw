import React from 'react'
import upIcon from '../sort-asc.png'
import downIcon from '../sort-desc.png'
import noneIcon from '../sort-sortable.png'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) return up
    if (sort === up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
               id={id + '-icon-' + sort}
               src={icon}
               style={{width: '20px', verticalAlign: 'middle', cursor: 'pointer'}}
            />
        </span>
    )
}

export default SuperSort
