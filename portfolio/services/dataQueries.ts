import { gql } from "@apollo/client";

export const FETCH_PROFILE_PIC = gql`
    {
        viewer {
            avatarUrl
        }
    }
`;

