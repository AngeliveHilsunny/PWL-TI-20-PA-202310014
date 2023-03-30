import React from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertInfo({variant}) {
    return (
        <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
        </Alert>
    )
}