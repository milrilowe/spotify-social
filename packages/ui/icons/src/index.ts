import {
    ArrowRightIcon,
    ArrowLeftIcon,
    ArrowUpIcon,
    ArrowDownIcon,
    ChevronRightIcon,
    ChevronLeftIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    XMarkIcon,
    Bars3Icon,
    MagnifyingGlassIcon,
    EllipsisHorizontalIcon,
    PlusCircleIcon,
    TrashIcon,
    PencilSquareIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    InformationCircleIcon,
    XCircleIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'

import { wrapHeroIcon } from './wrapper'

// Wrap Hero icons to match Lucide props
export const ArrowRight = wrapHeroIcon(ArrowRightIcon)
export const ArrowLeft = wrapHeroIcon(ArrowLeftIcon)
export const ArrowUp = wrapHeroIcon(ArrowUpIcon)
export const ArrowDown = wrapHeroIcon(ArrowDownIcon)
export const ChevronRight = wrapHeroIcon(ChevronRightIcon)
export const ChevronLeft = wrapHeroIcon(ChevronLeftIcon)
export const ChevronUp = wrapHeroIcon(ChevronUpIcon)
export const ChevronDown = wrapHeroIcon(ChevronDownIcon)
export const Close = wrapHeroIcon(XMarkIcon)
export const Menu = wrapHeroIcon(Bars3Icon)
export const Search = wrapHeroIcon(MagnifyingGlassIcon)
export const More = wrapHeroIcon(EllipsisHorizontalIcon)
export const Add = wrapHeroIcon(PlusCircleIcon)
export const Delete = wrapHeroIcon(TrashIcon)
export const Edit = wrapHeroIcon(PencilSquareIcon)
export const Warning = wrapHeroIcon(ExclamationTriangleIcon)
export const Success = wrapHeroIcon(CheckCircleIcon)
export const Info = wrapHeroIcon(InformationCircleIcon)
export const Error = wrapHeroIcon(XCircleIcon)
export const Question = wrapHeroIcon(QuestionMarkCircleIcon)

// Direct Lucide exports
export {
    Settings,
    Upload,
    Download,
    Copy,
    ExternalLink as External,
    Filter,
    Bell as Notification,
    AlertTriangle as Alert,
    Check,
    Github,
    Twitter,
    Linkedin
} from 'lucide-react'