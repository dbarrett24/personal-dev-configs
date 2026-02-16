import type { AnyIcon } from '@dbarrett24/core-components/Icons/anyIcon';
import type { IconProps } from '@dbarrett24/core-components/Icons/IconBase';
import {
    Archive,
    ArrowClockwise,
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowsCounterClockwise,
    ArrowsLeftRight,
    ArrowsOutCardinal,
    ArrowSquareOut,
    ArrowSquareRight,
    ArrowUp,
    Bank,
    Bell,
    BookBookmark,
    BookmarksSimple,
    Broadcast,
    CalendarBlank,
    CalendarStar,
    Camera,
    CaretDown,
    CaretLeft,
    CaretRight,
    CaretUp,
    Certificate,
    ChartBar,
    Check,
    CheckCircle,
    CirclesFour,
    Clock,
    ClockCountdown,
    Close,
    CloudArrowUp,
    CloudWarning,
    Code,
    Compass,
    Confetti,
    Copy,
    CornersOut,
    CreditCard,
    Crown,
    CrownSimple,
    CurrencyCircleDollar,
    CurrencyDollarSimple,
    Desktop,
    Detective,
    DotOutline,
    DotsSixVertical,
    DotsThreeOutline,
    DotsThreeOutlineVertical,
    DownloadSimple,
    EnvelopeSimple,
    Eraser,
    Eye,
    EyeSlash,
    FacebookLogo,
    FileArchive,
    FileArrowDown,
    FileCsv,
    FilePdf,
    Files,
    FileText,
    Fire,
    Flag,
    FlagBannerFold,
    FloppyDisk,
    Gauge,
    Gavel,
    Gear,
    GlobeHemisphereWest,
    GoogleLogo,
    GridNine,
    HandbagSimple,
    HandCoins,
    Headset,
    HeartStraight,
    HourglassLow,
    House,
    Image,
    ImageSquare,
    ImagesSquare,
    Info,
    InstagramLogo,
    Lightning,
    Link,
    LinkedinLogo,
    List,
    Lock,
    LockOpen,
    MagnifyingGlass,
    MapPin,
    MapPinSimpleArea,
    Medal,
    Megaphone,
    Minus,
    Money,
    Notches,
    NotePencil,
    Package,
    PaintBrush,
    Paperclip,
    PaperPlaneTilt,
    Pause,
    PencilLine,
    PencilRuler,
    PencilSimple,
    Phone,
    PinterestLogo,
    Play,
    Plus,
    PlusCircle,
    Printer,
    Question,
    Receipt,
    Rows,
    SealCheck,
    SelectionSlash,
    ShareNetwork,
    ShieldCheck,
    ShieldStar,
    ShoppingCart,
    ShuffleAngular,
    SidebarSimple,
    SlidersHorizontal,
    Smiley,
    Sparkle,
    SpinnerGap,
    StackPlus,
    Star,
    Storefront,
    Swap,
    Tag,
    ThumbsDown,
    ThumbsUp,
    Toolbox,
    Trash,
    TrendUp,
    Trophy,
    Truck,
    UploadSimple,
    User,
    Users,
    UsersThree,
    VideoCamera,
    Warning,
    WarningCircle,
    WifiHigh,
    XCircle,
    XLogo,
    YoutubeLogo,
} from '@dbarrett24/core-components/Icons';
import { cn } from '@dbarrett24/core-components';
import type { Meta } from '@storybook/react';
import React, { useMemo, useState } from 'react';

const preProcessed: {
    [iconName: string]: {
        Render: AnyIcon;
        importPath: string;
        searchableName: string;
    };
} = {
    Archive: {
        importPath: "import { Archive } from '@dbarrett24/core-components/Icons'",
        Render: Archive,
        searchableName: 'Archive',
    },
    ArrowClockwise: {
        importPath: "import { ArrowClockwise } from '@dbarrett24/core-components/Icons'",
        Render: ArrowClockwise,
        searchableName: 'Arrow Clockwise',
    },
    ArrowDown: {
        importPath: "import { ArrowDown } from '@dbarrett24/core-components/Icons'",
        Render: ArrowDown,
        searchableName: 'Arrow Down',
    },
    ArrowLeft: {
        importPath: "import { ArrowLeft } from '@dbarrett24/core-components/Icons'",
        Render: ArrowLeft,
        searchableName: 'Arrow Left',
    },
    ArrowRight: {
        importPath: "import { ArrowRight } from '@dbarrett24/core-components/Icons'",
        Render: ArrowRight,
        searchableName: 'Arrow Right',
    },
    ArrowsCounterClockwise: {
        importPath: "import { ArrowsCounterClockwise } from '@dbarrett24/core-components/Icons'",
        Render: ArrowsCounterClockwise,
        searchableName: 'Arrows Counter Clockwise',
    },
    ArrowsLeftRight: {
        importPath: "import { ArrowsLeftRight } from '@dbarrett24/core-components/Icons'",
        Render: ArrowsLeftRight,
        searchableName: 'Arrows Left Right',
    },
    ArrowsOutCardinal: {
        importPath: "import { ArrowsOutCardinal } from '@dbarrett24/core-components/Icons'",
        Render: ArrowsOutCardinal,
        searchableName: 'Arrows Out Cardinal',
    },
    ArrowSquareOut: {
        importPath: "import { ArrowSquareOut } from '@dbarrett24/core-components/Icons'",
        Render: ArrowSquareOut,
        searchableName: 'Arrow Square Out',
    },
    ArrowSquareRight: {
        importPath: "import { ArrowSquareRight } from '@dbarrett24/core-components/Icons'",
        Render: ArrowSquareRight,
        searchableName: 'Arrow Square Right',
    },
    ArrowUp: {
        importPath: "import { ArrowUp } from '@dbarrett24/core-components/Icons'",
        Render: ArrowUp,
        searchableName: 'Arrow Up',
    },
    Bank: {
        importPath: "import { Bank } from '@dbarrett24/core-components/Icons'",
        Render: Bank,
        searchableName: 'Bank',
    },
    Bell: {
        importPath: "import { Bell } from '@dbarrett24/core-components/Icons'",
        Render: Bell,
        searchableName: 'Bell',
    },
    BookBookmark: {
        importPath: "import { BookBookmark } from '@dbarrett24/core-components/Icons'",
        Render: BookBookmark,
        searchableName: 'Book Bookmark',
    },
    BookmarksSimple: {
        importPath: "import { BookmarksSimple } from '@dbarrett24/core-components/Icons'",
        Render: BookmarksSimple,
        searchableName: 'Bookmarks Simple',
    },
    Broadcast: {
        importPath: "import { Broadcast } from '@dbarrett24/core-components/Icons'",
        Render: Broadcast,
        searchableName: 'Broadcast',
    },
    CalendarBlank: {
        importPath: "import { CalendarBlank } from '@dbarrett24/core-components/Icons'",
        Render: CalendarBlank,
        searchableName: 'Calendar Blank',
    },
    CalendarStar: {
        importPath: "import { CalendarStar } from '@dbarrett24/core-components/Icons'",
        Render: CalendarStar,
        searchableName: 'Calendar Star',
    },
    Camera: {
        importPath: "import { Camera } from '@dbarrett24/core-components/Icons'",
        Render: Camera,
        searchableName: 'Camera',
    },
    CaretDown: {
        importPath: "import { CaretDown } from '@dbarrett24/core-components/Icons'",
        Render: CaretDown,
        searchableName: 'Caret Down',
    },
    CaretLeft: {
        importPath: "import { CaretLeft } from '@dbarrett24/core-components/Icons'",
        Render: CaretLeft,
        searchableName: 'Caret Left',
    },
    CaretRight: {
        importPath: "import { CaretRight } from '@dbarrett24/core-components/Icons'",
        Render: CaretRight,
        searchableName: 'Caret Right',
    },
    CaretUp: {
        importPath: "import { CaretUp } from '@dbarrett24/core-components/Icons'",
        Render: CaretUp,
        searchableName: 'Caret Up',
    },
    Certificate: {
        importPath: "import { Certificate } from '@dbarrett24/core-components/Icons'",
        Render: Certificate,
        searchableName: 'Certificate',
    },
    ChartBar: {
        importPath: "import { ChartBar } from '@dbarrett24/core-components/Icons'",
        Render: ChartBar,
        searchableName: 'Chart Bar',
    },
    Check: {
        importPath: "import { Check } from '@dbarrett24/core-components/Icons'",
        Render: Check,
        searchableName: 'Check',
    },
    CheckCircle: {
        importPath: "import { CheckCircle } from '@dbarrett24/core-components/Icons'",
        Render: CheckCircle,
        searchableName: 'Check Circle',
    },
    CirclesFour: {
        importPath: "import { CirclesFour } from '@dbarrett24/core-components/Icons'",
        Render: CirclesFour,
        searchableName: 'Circles Four',
    },
    Clock: {
        importPath: "import { Clock } from '@dbarrett24/core-components/Icons'",
        Render: Clock,
        searchableName: 'Clock',
    },
    ClockCountdown: {
        importPath: "import { ClockCountdown } from '@dbarrett24/core-components/Icons'",
        Render: ClockCountdown,
        searchableName: 'Clock Countdown',
    },
    Close: {
        importPath: "import { Close } from '@dbarrett24/core-components/Icons'",
        Render: Close,
        searchableName: 'Close',
    },
    CloudArrowUp: {
        importPath: "import { CloudArrowUp } from '@dbarrett24/core-components/Icons'",
        Render: CloudArrowUp,
        searchableName: 'Cloud Arrow Up',
    },
    CloudWarning: {
        importPath: "import { CloudWarning } from '@dbarrett24/core-components/Icons'",
        Render: CloudWarning,
        searchableName: 'Cloud Warning',
    },
    Code: {
        importPath: "import { Code } from '@dbarrett24/core-components/Icons'",
        Render: Code,
        searchableName: 'Code',
    },
    Compass: {
        importPath: "import { Compass } from '@dbarrett24/core-components/Icons'",
        Render: Compass,
        searchableName: 'Compass',
    },
    Confetti: {
        importPath: "import { Confetti } from '@dbarrett24/core-components/Icons'",
        Render: Confetti,
        searchableName: 'Confetti',
    },
    Copy: {
        importPath: "import { Copy } from '@dbarrett24/core-components/Icons'",
        Render: Copy,
        searchableName: 'Copy',
    },
    CornersOut: {
        importPath: "import { CornersOut } from '@dbarrett24/core-components/Icons'",
        Render: CornersOut,
        searchableName: 'Corners Out',
    },
    CreditCard: {
        importPath: "import { CreditCard } from '@dbarrett24/core-components/Icons'",
        Render: CreditCard,
        searchableName: 'Credit Card',
    },
    Crown: {
        importPath: "import { Crown } from '@dbarrett24/core-components/Icons'",
        Render: Crown,
        searchableName: 'Crown',
    },
    CrownSimple: {
        importPath: "import { CrownSimple } from '@dbarrett24/core-components/Icons'",
        Render: CrownSimple,
        searchableName: 'Crown Simple',
    },
    CurrencyCircleDollar: {
        importPath: "import { CurrencyCircleDollar } from '@dbarrett24/core-components/Icons'",
        Render: CurrencyCircleDollar,
        searchableName: 'Currency Circle Dollar',
    },
    CurrencyDollarSimple: {
        importPath: "import { CurrencyDollarSimple } from '@dbarrett24/core-components/Icons'",
        Render: CurrencyDollarSimple,
        searchableName: 'Currency Dollar Simple',
    },
    Desktop: {
        importPath: "import { Desktop } from '@dbarrett24/core-components/Icons'",
        Render: Desktop,
        searchableName: 'Desktop',
    },
    Detective: {
        importPath: "import { Detective } from '@dbarrett24/core-components/Icons'",
        Render: Detective,
        searchableName: 'Detective',
    },
    DotOutline: {
        importPath: "import { DotOutline } from '@dbarrett24/core-components/Icons'",
        Render: DotOutline,
        searchableName: 'Dot Outline',
    },
    DotsSixVertical: {
        importPath: "import { DotsSixVertical } from '@dbarrett24/core-components/Icons'",
        Render: DotsSixVertical,
        searchableName: 'Dots Six Vertical',
    },
    DotsThreeOutline: {
        importPath: "import { DotsThreeOutline } from '@dbarrett24/core-components/Icons'",
        Render: DotsThreeOutline,
        searchableName: 'Dots Three Outline',
    },
    DotsThreeOutlineVertical: {
        importPath: "import { DotsThreeOutlineVertical } from '@dbarrett24/core-components/Icons'",
        Render: DotsThreeOutlineVertical,
        searchableName: 'Dots Three Outline Vertical',
    },
    DownloadSimple: {
        importPath: "import { DownloadSimple } from '@dbarrett24/core-components/Icons'",
        Render: DownloadSimple,
        searchableName: 'Download Simple',
    },
    EnvelopeSimple: {
        importPath: "import { EnvelopeSimple } from '@dbarrett24/core-components/Icons'",
        Render: EnvelopeSimple,
        searchableName: 'Envelope Simple',
    },
    Eraser: {
        importPath: "import { Eraser } from '@dbarrett24/core-components/Icons'",
        Render: Eraser,
        searchableName: 'Eraser',
    },
    Eye: {
        importPath: "import { Eye } from '@dbarrett24/core-components/Icons'",
        Render: Eye,
        searchableName: 'Eye',
    },
    EyeSlash: {
        importPath: "import { EyeSlash } from '@dbarrett24/core-components/Icons'",
        Render: EyeSlash,
        searchableName: 'Eye Slash',
    },
    FacebookLogo: {
        importPath: "import { FacebookLogo } from '@dbarrett24/core-components/Icons'",
        Render: FacebookLogo,
        searchableName: 'Facebook Logo',
    },
    FileArchive: {
        importPath: "import { FileArchive } from '@dbarrett24/core-components/Icons'",
        Render: FileArchive,
        searchableName: 'File Archive',
    },
    FileArrowDown: {
        importPath: "import { FileArrowDown } from '@dbarrett24/core-components/Icons'",
        Render: FileArrowDown,
        searchableName: 'File Arrow Down',
    },
    FileCsv: {
        importPath: "import { FileCsv } from '@dbarrett24/core-components/Icons'",
        Render: FileCsv,
        searchableName: 'File Csv',
    },
    FilePdf: {
        importPath: "import { FilePdf } from '@dbarrett24/core-components/Icons'",
        Render: FilePdf,
        searchableName: 'File Pdf',
    },
    Files: {
        importPath: "import { Files } from '@dbarrett24/core-components/Icons'",
        Render: Files,
        searchableName: 'Files',
    },
    FileText: {
        importPath: "import { FileText } from '@dbarrett24/core-components/Icons'",
        Render: FileText,
        searchableName: 'File Text',
    },
    Fire: {
        importPath: "import { Fire } from '@dbarrett24/core-components/Icons'",
        Render: Fire,
        searchableName: 'Fire',
    },
    Flag: {
        importPath: "import { Flag } from '@dbarrett24/core-components/Icons'",
        Render: Flag,
        searchableName: 'Flag',
    },
    FlagBannerFold: {
        importPath: "import { FlagBannerFold } from '@dbarrett24/core-components/Icons'",
        Render: FlagBannerFold,
        searchableName: 'Flag Banner Fold',
    },
    FloppyDisk: {
        importPath: "import { FloppyDisk } from '@dbarrett24/core-components/Icons'",
        Render: FloppyDisk,
        searchableName: 'Floppy Disk',
    },
    Gauge: {
        importPath: "import { Gauge } from '@dbarrett24/core-components/Icons'",
        Render: Gauge,
        searchableName: 'Gauge',
    },
    Gavel: {
        importPath: "import { Gavel } from '@dbarrett24/core-components/Icons'",
        Render: Gavel,
        searchableName: 'Gavel',
    },
    Gear: {
        importPath: "import { Gear } from '@dbarrett24/core-components/Icons'",
        Render: Gear,
        searchableName: 'Gear',
    },
    GlobeHemisphereWest: {
        importPath: "import { GlobeHemisphereWest } from '@dbarrett24/core-components/Icons'",
        Render: GlobeHemisphereWest,
        searchableName: 'Globe Hemisphere West',
    },
    GoogleLogo: {
        importPath: "import { GoogleLogo } from '@dbarrett24/core-components/Icons'",
        Render: GoogleLogo,
        searchableName: 'Google Logo',
    },
    GridNine: {
        importPath: "import { GridNine } from '@dbarrett24/core-components/Icons'",
        Render: GridNine,
        searchableName: 'Grid Nine',
    },
    HandbagSimple: {
        importPath: "import { HandbagSimple } from '@dbarrett24/core-components/Icons'",
        Render: HandbagSimple,
        searchableName: 'Handbag Simple',
    },
    HandCoins: {
        importPath: "import { HandCoins } from '@dbarrett24/core-components/Icons'",
        Render: HandCoins,
        searchableName: 'Hand Coins',
    },
    Headset: {
        importPath: "import { Headset } from '@dbarrett24/core-components/Icons'",
        Render: Headset,
        searchableName: 'Headset',
    },
    HeartStraight: {
        importPath: "import { HeartStraight } from '@dbarrett24/core-components/Icons'",
        Render: HeartStraight,
        searchableName: 'Heart Straight',
    },
    HourglassLow: {
        importPath: "import { HourglassLow } from '@dbarrett24/core-components/Icons'",
        Render: HourglassLow,
        searchableName: 'Hourglass Low',
    },
    House: {
        importPath: "import { House } from '@dbarrett24/core-components/Icons'",
        Render: House,
        searchableName: 'House',
    },
    Image: {
        importPath: "import { Image } from '@dbarrett24/core-components/Icons'",
        Render: Image,
        searchableName: 'Image',
    },
    ImageSquare: {
        importPath: "import { ImageSquare } from '@dbarrett24/core-components/Icons'",
        Render: ImageSquare,
        searchableName: 'Image Square',
    },
    ImagesSquare: {
        importPath: "import { ImagesSquare } from '@dbarrett24/core-components/Icons'",
        Render: ImagesSquare,
        searchableName: 'Images Square',
    },
    Info: {
        importPath: "import { Info } from '@dbarrett24/core-components/Icons'",
        Render: Info,
        searchableName: 'Info',
    },
    InstagramLogo: {
        importPath: "import { InstagramLogo } from '@dbarrett24/core-components/Icons'",
        Render: InstagramLogo,
        searchableName: 'Instagram Logo',
    },
    Lightning: {
        importPath: "import { Lightning } from '@dbarrett24/core-components/Icons'",
        Render: Lightning,
        searchableName: 'Lightning',
    },
    Link: {
        importPath: "import { Link } from '@dbarrett24/core-components/Icons'",
        Render: Link,
        searchableName: 'Link',
    },
    LinkedinLogo: {
        importPath: "import { LinkedinLogo } from '@dbarrett24/core-components/Icons'",
        Render: LinkedinLogo,
        searchableName: 'Linkedin Logo',
    },
    List: {
        importPath: "import { List } from '@dbarrett24/core-components/Icons'",
        Render: List,
        searchableName: 'List',
    },
    Lock: {
        importPath: "import { Lock } from '@dbarrett24/core-components/Icons'",
        Render: Lock,
        searchableName: 'Lock',
    },
    LockOpen: {
        importPath: "import { LockOpen } from '@dbarrett24/core-components/Icons'",
        Render: LockOpen,
        searchableName: 'Lock Open',
    },
    MagnifyingGlass: {
        importPath: "import { MagnifyingGlass } from '@dbarrett24/core-components/Icons'",
        Render: MagnifyingGlass,
        searchableName: 'Magnifying Glass',
    },
    MapPin: {
        importPath: "import { MapPin } from '@dbarrett24/core-components/Icons'",
        Render: MapPin,
        searchableName: 'Map Pin',
    },
    MapPinSimpleArea: {
        importPath: "import { MapPinSimpleArea } from '@dbarrett24/core-components/Icons'",
        Render: MapPinSimpleArea,
        searchableName: 'Map Pin Simple Area',
    },
    Medal: {
        importPath: "import { Medal } from '@dbarrett24/core-components/Icons'",
        Render: Medal,
        searchableName: 'Medal',
    },
    Megaphone: {
        importPath: "import { Megaphone } from '@dbarrett24/core-components/Icons'",
        Render: Megaphone,
        searchableName: 'Megaphone',
    },
    Minus: {
        importPath: "import { Minus } from '@dbarrett24/core-components/Icons'",
        Render: Minus,
        searchableName: 'Minus',
    },
    Money: {
        importPath: "import { Money } from '@dbarrett24/core-components/Icons'",
        Render: Money,
        searchableName: 'Money',
    },
    Notches: {
        importPath: "import { Notches } from '@dbarrett24/core-components/Icons'",
        Render: Notches,
        searchableName: 'Notches',
    },
    NotePencil: {
        importPath: "import { NotePencil } from '@dbarrett24/core-components/Icons'",
        Render: NotePencil,
        searchableName: 'Note Pencil',
    },
    Package: {
        importPath: "import { Package } from '@dbarrett24/core-components/Icons'",
        Render: Package,
        searchableName: 'Package',
    },
    PaintBrush: {
        importPath: "import { PaintBrush } from '@dbarrett24/core-components/Icons'",
        Render: PaintBrush,
        searchableName: 'Paint Brush',
    },
    Paperclip: {
        importPath: "import { Paperclip } from '@dbarrett24/core-components/Icons'",
        Render: Paperclip,
        searchableName: 'Paperclip',
    },
    PaperPlaneTilt: {
        importPath: "import { PaperPlaneTilt } from '@dbarrett24/core-components/Icons'",
        Render: PaperPlaneTilt,
        searchableName: 'Paper Plane Tilt',
    },
    Pause: {
        importPath: "import { Pause } from '@dbarrett24/core-components/Icons'",
        Render: Pause,
        searchableName: 'Pause',
    },
    PencilLine: {
        importPath: "import { PencilLine } from '@dbarrett24/core-components/Icons'",
        Render: PencilLine,
        searchableName: 'Pencil Line',
    },
    PencilRuler: {
        importPath: "import { PencilRuler } from '@dbarrett24/core-components/Icons'",
        Render: PencilRuler,
        searchableName: 'Pencil Ruler',
    },
    PencilSimple: {
        importPath: "import { PencilSimple } from '@dbarrett24/core-components/Icons'",
        Render: PencilSimple,
        searchableName: 'Pencil Simple',
    },
    Phone: {
        importPath: "import { Phone } from '@dbarrett24/core-components/Icons'",
        Render: Phone,
        searchableName: 'Phone',
    },
    PinterestLogo: {
        importPath: "import { PinterestLogo } from '@dbarrett24/core-components/Icons'",
        Render: PinterestLogo,
        searchableName: 'Pinterest Logo',
    },
    Play: {
        importPath: "import { Play } from '@dbarrett24/core-components/Icons'",
        Render: Play,
        searchableName: 'Play',
    },
    Plus: {
        importPath: "import { Plus } from '@dbarrett24/core-components/Icons'",
        Render: Plus,
        searchableName: 'Plus',
    },
    PlusCircle: {
        importPath: "import { PlusCircle } from '@dbarrett24/core-components/Icons'",
        Render: PlusCircle,
        searchableName: 'Plus Circle',
    },
    Printer: {
        importPath: "import { Printer } from '@dbarrett24/core-components/Icons'",
        Render: Printer,
        searchableName: 'Printer',
    },
    Question: {
        importPath: "import { Question } from '@dbarrett24/core-components/Icons'",
        Render: Question,
        searchableName: 'Question',
    },
    Receipt: {
        importPath: "import { Receipt } from '@dbarrett24/core-components/Icons'",
        Render: Receipt,
        searchableName: 'Receipt',
    },
    Rows: {
        importPath: "import { Rows } from '@dbarrett24/core-components/Icons'",
        Render: Rows,
        searchableName: 'Rows',
    },
    SealCheck: {
        importPath: "import { SealCheck } from '@dbarrett24/core-components/Icons'",
        Render: SealCheck,
        searchableName: 'Seal Check',
    },
    SelectionSlash: {
        importPath: "import { SelectionSlash } from '@dbarrett24/core-components/Icons'",
        Render: SelectionSlash,
        searchableName: 'Selection Slash',
    },
    ShareNetwork: {
        importPath: "import { ShareNetwork } from '@dbarrett24/core-components/Icons'",
        Render: ShareNetwork,
        searchableName: 'Share Network',
    },
    ShieldCheck: {
        importPath: "import { ShieldCheck } from '@dbarrett24/core-components/Icons'",
        Render: ShieldCheck,
        searchableName: 'Shield Check',
    },
    ShieldStar: {
        importPath: "import { ShieldStar } from '@dbarrett24/core-components/Icons'",
        Render: ShieldStar,
        searchableName: 'Shield Star',
    },
    ShoppingCart: {
        importPath: "import { ShoppingCart } from '@dbarrett24/core-components/Icons'",
        Render: ShoppingCart,
        searchableName: 'Shopping Cart',
    },
    ShuffleAngular: {
        importPath: "import { ShuffleAngular } from '@dbarrett24/core-components/Icons'",
        Render: ShuffleAngular,
        searchableName: 'Shuffle Angular',
    },
    SidebarSimple: {
        importPath: "import { SidebarSimple } from '@dbarrett24/core-components/Icons'",
        Render: SidebarSimple,
        searchableName: 'Sidebar Simple',
    },
    SlidersHorizontal: {
        importPath: "import { SlidersHorizontal } from '@dbarrett24/core-components/Icons'",
        Render: SlidersHorizontal,
        searchableName: 'Sliders Horizontal',
    },
    Smiley: {
        importPath: "import { Smiley } from '@dbarrett24/core-components/Icons'",
        Render: Smiley,
        searchableName: 'Smiley',
    },
    Sparkle: {
        importPath: "import { Sparkle } from '@dbarrett24/core-components/Icons'",
        Render: Sparkle,
        searchableName: 'Sparkle',
    },
    SpinnerGap: {
        importPath: "import { SpinnerGap } from '@dbarrett24/core-components/Icons'",
        Render: SpinnerGap,
        searchableName: 'Spinner Gap',
    },
    StackPlus: {
        importPath: "import { StackPlus } from '@dbarrett24/core-components/Icons'",
        Render: StackPlus,
        searchableName: 'Stack Plus',
    },
    Star: {
        importPath: "import { Star } from '@dbarrett24/core-components/Icons'",
        Render: Star,
        searchableName: 'Star',
    },
    Storefront: {
        importPath: "import { Storefront } from '@dbarrett24/core-components/Icons'",
        Render: Storefront,
        searchableName: 'Storefront',
    },
    Swap: {
        importPath: "import { Swap } from '@dbarrett24/core-components/Icons'",
        Render: Swap,
        searchableName: 'Swap',
    },
    Tag: {
        importPath: "import { Tag } from '@dbarrett24/core-components/Icons'",
        Render: Tag,
        searchableName: 'Tag',
    },
    ThumbsDown: {
        importPath: "import { ThumbsDown } from '@dbarrett24/core-components/Icons'",
        Render: ThumbsDown,
        searchableName: 'Thumbs Down',
    },
    ThumbsUp: {
        importPath: "import { ThumbsUp } from '@dbarrett24/core-components/Icons'",
        Render: ThumbsUp,
        searchableName: 'Thumbs Up',
    },
    Toolbox: {
        importPath: "import { Toolbox } from '@dbarrett24/core-components/Icons'",
        Render: Toolbox,
        searchableName: 'Toolbox',
    },
    Trash: {
        importPath: "import { Trash } from '@dbarrett24/core-components/Icons'",
        Render: Trash,
        searchableName: 'Trash',
    },
    TrendUp: {
        importPath: "import { TrendUp } from '@dbarrett24/core-components/Icons'",
        Render: TrendUp,
        searchableName: 'Trend Up',
    },
    Trophy: {
        importPath: "import { Trophy } from '@dbarrett24/core-components/Icons'",
        Render: Trophy,
        searchableName: 'Trophy',
    },
    Truck: {
        importPath: "import { Truck } from '@dbarrett24/core-components/Icons'",
        Render: Truck,
        searchableName: 'Truck',
    },
    UploadSimple: {
        importPath: "import { UploadSimple } from '@dbarrett24/core-components/Icons'",
        Render: UploadSimple,
        searchableName: 'Upload Simple',
    },
    User: {
        importPath: "import { User } from '@dbarrett24/core-components/Icons'",
        Render: User,
        searchableName: 'User',
    },
    Users: {
        importPath: "import { Users } from '@dbarrett24/core-components/Icons'",
        Render: Users,
        searchableName: 'Users',
    },
    UsersThree: {
        importPath: "import { UsersThree } from '@dbarrett24/core-components/Icons'",
        Render: UsersThree,
        searchableName: 'Users Three',
    },
    VideoCamera: {
        importPath: "import { VideoCamera } from '@dbarrett24/core-components/Icons'",
        Render: VideoCamera,
        searchableName: 'Video Camera',
    },
    Warning: {
        importPath: "import { Warning } from '@dbarrett24/core-components/Icons'",
        Render: Warning,
        searchableName: 'Warning',
    },
    WarningCircle: {
        importPath: "import { WarningCircle } from '@dbarrett24/core-components/Icons'",
        Render: WarningCircle,
        searchableName: 'Warning Circle',
    },
    WifiHigh: {
        importPath: "import { WifiHigh } from '@dbarrett24/core-components/Icons'",
        Render: WifiHigh,
        searchableName: 'Wifi High',
    },
    XCircle: {
        importPath: "import { XCircle } from '@dbarrett24/core-components/Icons'",
        Render: XCircle,
        searchableName: 'X Circle',
    },
    XLogo: {
        importPath: "import { XLogo } from '@dbarrett24/core-components/Icons'",
        Render: XLogo,
        searchableName: 'X Logo',
    },
    YoutubeLogo: {
        importPath: "import { YoutubeLogo } from '@dbarrett24/core-components/Icons'",
        Render: YoutubeLogo,
        searchableName: 'Youtube Logo',
    },
};

const processed = Object.values(preProcessed);

const colorOptions = [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Info', value: 'info' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
    { label: 'Critical', value: 'critical' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Inverse', value: 'inverse' },
    { label: 'Inherit', value: 'inherit' },
] as const;

const styleOptions = [
    { label: 'Regular', value: 'regular' },
    { label: 'Duotone', value: 'duotone' },
    { label: 'Bold', value: 'bold' },
    { label: 'Fill', value: 'fill' },
] as const;

const sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
] as const;

const IconStorybook = () => {
    const [color, setColor] = useState<IconProps['color']>('primary');
    const [size, setSize] = useState<IconProps['size']>('md');
    const [style, setStyle] = useState<IconProps['style']>('regular');
    const [search, setSearch] = useState('');
    const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

    const postProcessed = useMemo(() => {
        return processed.filter(({ searchableName }) => searchableName.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    const handleCopyImport = async (importPath: string, iconName: string) => {
        try {
            await navigator.clipboard.writeText(importPath);
            setCopiedIcon(iconName);
            setTimeout(() => setCopiedIcon(null), 2000);
        } catch {
            // Clipboard API may not be available in all environments
        }
    };

    return (
        <div className="mx-auto max-w-[768px]">
            <div className="mb-md">
                <h1 className="text-text-primary mb-sm text-2xl font-bold">Icon Library</h1>
                <p className="text-text-secondary text-sm">
                    Select an icon to copy its import statement. Use the controls below to preview different styles,
                    sizes, and colors.
                </p>
            </div>

            {/* Search */}
            <div className="pt-md flex w-full">
                <input
                    className="border-border-primary text-text-primary bg-background-primary px-sm py-xs w-full rounded-md border text-sm placeholder:text-gray-400"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search icons by name..."
                    type="search"
                    value={search}
                />
            </div>

            {/* Controls */}
            <div className="gap-md pt-md flex w-full pb-[2px]">
                <label className="text-text-secondary flex-1 text-xs font-semibold">Style</label>
                <label className="text-text-secondary flex-1 text-xs font-semibold">Size</label>
                <label className="text-text-secondary flex-1 text-xs font-semibold">Color</label>
            </div>
            <div className="gap-md flex w-full">
                <select
                    className="border-border-primary text-text-primary bg-background-primary px-xs py-xs flex-1 rounded-md border text-sm"
                    onChange={(e) => setStyle(e.target.value as IconProps['style'])}
                    value={style}
                >
                    {styleOptions.map(({ label, value }) => (
                        <option
                            key={value}
                            value={value}
                        >
                            {label}
                        </option>
                    ))}
                </select>
                <select
                    className="border-border-primary text-text-primary bg-background-primary px-xs py-xs flex-1 rounded-md border text-sm"
                    onChange={(e) => setSize(e.target.value as IconProps['size'])}
                    value={size}
                >
                    {sizeOptions.map(({ label, value }) => (
                        <option
                            key={value}
                            value={value}
                        >
                            {label}
                        </option>
                    ))}
                </select>
                <select
                    className="border-border-primary text-text-primary bg-background-primary px-xs py-xs flex-1 rounded-md border text-sm"
                    onChange={(e) => setColor(e.target.value as IconProps['color'])}
                    value={color}
                >
                    {colorOptions.map(({ label, value }) => (
                        <option
                            key={value}
                            value={value}
                        >
                            {label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Copied toast */}
            {copiedIcon && (
                <div className="bg-success-600 mt-sm px-sm py-xs rounded-md text-center text-sm text-white">
                    ✓ Import for {copiedIcon} copied to clipboard
                </div>
            )}

            {/* Icon grid */}
            <div className="bg-border-secondary mt-lg">
                <div className="grid grid-cols-3 gap-px p-[1px]">
                    {postProcessed.map(({ importPath, Render, searchableName }) => {
                        return (
                            <button
                                className={cn(
                                    'gap-sm p-sm flex cursor-pointer flex-col items-center border-none',
                                    color === 'inverse' ? 'bg-background-inverse' : 'bg-background-primary'
                                )}
                                key={searchableName}
                                onClick={() => handleCopyImport(importPath, searchableName)}
                                type="button"
                            >
                                <Render
                                    color={color}
                                    size={size}
                                    style={style}
                                />
                                <span
                                    className={cn(
                                        'text-xs',
                                        color === 'inverse' ? 'text-text-inverse' : 'text-text-secondary'
                                    )}
                                >
                                    {searchableName}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Count */}
            <p className="text-text-secondary mt-sm text-xs">
                Showing {postProcessed.length} of {processed.length} icons
            </p>
        </div>
    );
};

export default {
    title: 'Core/Icons/Icon Library',
    args: {
        color: 'primary',
        size: 'md',
        style: 'regular',
    },
    argTypes: {
        color: {
            control: 'select',
            defaultValue: { summary: 'inherit' },
            description: 'The color of the icon.',
            options: [
                'primary',
                'secondary',
                'info',
                'success',
                'warning',
                'critical',
                'disabled',
                'inverse',
                'inherit',
            ],
            type: 'string',
        },
        size: {
            control: 'select',
            defaultValue: { summary: 'md' },
            description: 'The size of the icon.',
            options: sizeOptions.map(({ value }) => value),
            type: 'string',
        },
        style: {
            control: 'select',
            defaultValue: { summary: 'regular' },
            description: 'The style of the icon.',
            options: styleOptions.map(({ value }) => value),
            type: 'string',
        },
    },
    component: IconStorybook,
} satisfies Meta<typeof IconStorybook>;

export const _Icon_Library = {};
