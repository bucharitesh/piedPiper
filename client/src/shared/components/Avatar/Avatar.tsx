import './avatar.css';

interface Props {
    src?: string;
    alt?: string;
}

const Avatar: React.FC<Props> = (props: Props) => {
    return (
        <div className="avatarContainer">
            <svg width="0" height="0">
                <defs>
                    <clipPath id="squircle" clipPathUnits="objectBoundingBox">
                    <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z"/>
                    </clipPath>
                </defs>
            </svg>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Avatar;
