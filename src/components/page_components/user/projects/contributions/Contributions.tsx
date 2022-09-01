import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Card, CardItem } from '../../../../common/Card'
export const Contributions = ({ data }) => {
    const router = useRouter()

    return (
        <Card>
            <Card.CardHeader>
                <div className="flex items-center justify-between">
                    <Link
                        href={`/${router.query.username}/${router.query.projectName}/contributions/create`}>
                        <a
                            className="
                            text-primary hover:underline cursor-pointer
                            ">
                            إضافة مساهمة
                        </a>
                    </Link>
                    <div className="text-primary-text">المساهمات</div>
                </div>
            </Card.CardHeader>
            {data.data?.length > 0 ? (
                data?.data?.map((item, index) => (
                    <CardItem key={item.id}>
                        <ContributionItem
                            name={item?.title}
                            id={item?.id}
                            status=""
                            info={
                                <>
                                    <ContributionInfoItem
                                        info={`#${item.id}`}
                                    />
                                    <ContributionInfoItem info={'فيصل حداد'} />
                                    <ContributionInfoItem info={'٢٠٢١/٠٧/١٠'} />
                                </>
                            }
                        />
                    </CardItem>
                ))
            ) : (
                <div className="text-center text-gray-500 py-5">
                    لا توجد مساهمات
                </div>
            )}
        </Card>
    )
}
export const ContributionItem = ({ name, info, status, id }) => {
    const router = useRouter()

    return (
        <div className="flex items-center justify-between w-full rtl">
            <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div className="flex flex-col mr-3">
                    <Link
                        href={`/${router.query.username}/${router.query.projectName}/contributions/${id}`}>
                        <a className='className="text-sm text-primary hover:underline cursor-pointer font-bold"'>
                            {name}
                        </a>
                    </Link>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                        {info}
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex flex-col">
                    <div className="text-sm font-bold">١٠٠</div>
                    <div className="text-xs text-gray-500">نقطة</div>
                </div>
            </div>
        </div>
    )
}

export const ContributionInfoItem = ({ info }) => {
    return <div className="text-xs text-gray-500 ml-2">{info}</div>
}