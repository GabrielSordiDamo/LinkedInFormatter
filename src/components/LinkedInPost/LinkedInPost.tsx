import {
  FaComment,
  FaPaperPlane,
  FaShare,
  FaThumbsUp,
  FaUserPlus,
} from "react-icons/fa";
import {
  ConnectButton,
  EngagementButton,
  EngagementSection,
  PostContent,
  PostHeader,
  PostWrapper,
  ProfileImage,
  UserInfo,
} from "./LinkedInPostStyledComponents.tsx";
import { memo } from "react";
import DOMPurify from "dompurify";

export interface LinkedInPostProps {
  readonly profileImage?: string;
  readonly name?: string;
  readonly headline?: string;
  readonly contentText?: string;
  readonly contentImage?: string;
  readonly className?: string;
  readonly profileHref?: string;
}
function LinkedInPost({
  profileImage,
  name,
  headline,
  contentText,
  contentImage,
  className,
  profileHref,
}: LinkedInPostProps) {
  return (
    <PostWrapper className={`${className}`}>
      <PostHeader>
        <a href={profileHref} target="_blank" rel="noopener noreferrer">
          <ProfileImage src={profileImage} alt={`${name} profile`} />
        </a>
        <UserInfo>
          <a href={profileHref} target="_blank" rel="noopener noreferrer">
            <span className="name">{name}</span>
          </a>
          <a href={profileHref} target="_blank" rel="noopener noreferrer">
            <span className="headline">{headline}</span>
          </a>
        </UserInfo>
        <ConnectButton
          as="a"
          href={profileHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaUserPlus /> Connect
        </ConnectButton>
      </PostHeader>

      <PostContent>
        <div
          className="content-text"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(contentText ?? ""),
          }}
        ></div>
        {contentImage && (
          <img
            className="content-image"
            src={contentImage}
            alt="Post content"
          />
        )}
      </PostContent>

      <EngagementSection>
        <EngagementButton>
          <FaThumbsUp />
          <span>Like</span>
        </EngagementButton>
        <EngagementButton>
          <FaComment />
          <span>Comment</span>
        </EngagementButton>
        <EngagementButton>
          <FaShare />
          <span>Share</span>
        </EngagementButton>
        <EngagementButton>
          <FaPaperPlane />
          <span>Send</span>
        </EngagementButton>
      </EngagementSection>
    </PostWrapper>
  );
}

export default memo(LinkedInPost);
