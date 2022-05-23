import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className="flex items-center flex-shrink-0 px-4">
            <Image
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Leadsparkr"
            />
        </div>
    )
}

export default Logo