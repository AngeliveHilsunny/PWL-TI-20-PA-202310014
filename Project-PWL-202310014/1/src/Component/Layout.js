import React from 'react'

export default function Layout(props) {

    return (
        <div className='d-flex flex-column flex-root'>
            <div className="d-flex flex-column flex-column-fluid">
                <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                    <h1 className="mb-12 text-white">
                        {props.title}
                    </h1>
                    <div className="">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}