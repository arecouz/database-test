/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      anonymous_resource: {
        Row: {
          id: string;
          interaction_type: string;
          resource_id: string | null;
          timestamp: string | null;
        };
        Insert: {
          id?: string;
          interaction_type: string;
          resource_id?: string | null;
          timestamp?: string | null;
        };
        Update: {
          id?: string;
          interaction_type?: string;
          resource_id?: string | null;
          timestamp?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'anonymous_resource_resource_id_fkey';
            columns: ['resource_id'];
            isOneToOne: false;
            referencedRelation: 'resources';
            referencedColumns: ['id'];
          }
        ];
      };
      'British Monarchs': {
        Row: {
          Birth: string | null;
          Death: string | null;
          Monarch: string | null;
          Monarch_ID: number;
          Parents: string | null;
          'Reign End': number | null;
          'Reign Start': number | null;
          'Spouse(s)': string | null;
        };
        Insert: {
          Birth?: string | null;
          Death?: string | null;
          Monarch?: string | null;
          Monarch_ID: number;
          Parents?: string | null;
          'Reign End'?: number | null;
          'Reign Start'?: number | null;
          'Spouse(s)'?: string | null;
        };
        Update: {
          Birth?: string | null;
          Death?: string | null;
          Monarch?: string | null;
          Monarch_ID?: number;
          Parents?: string | null;
          'Reign End'?: number | null;
          'Reign Start'?: number | null;
          'Spouse(s)'?: string | null;
        };
        Relationships: [];
      };
      resource_tags: {
        Row: {
          resource_id: string;
          tag_id: string;
        };
        Insert: {
          resource_id: string;
          tag_id: string;
        };
        Update: {
          resource_id?: string;
          tag_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'resource_tags_resource_id_fkey';
            columns: ['resource_id'];
            isOneToOne: false;
            referencedRelation: 'resources';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'resource_tags_tag_id_fkey';
            columns: ['tag_id'];
            isOneToOne: false;
            referencedRelation: 'tags';
            referencedColumns: ['id'];
          }
        ];
      };
      resources: {
        Row: {
          accessibility_score: number | null;
          created_at: string | null;
          created_by: string | null;
          description: string | null;
          id: string;
          title: string;
          type: string;
          url: string | null;
        };
        Insert: {
          accessibility_score?: number | null;
          created_at?: string | null;
          created_by?: string | null;
          description?: string | null;
          id?: string;
          title: string;
          type: string;
          url?: string | null;
        };
        Update: {
          accessibility_score?: number | null;
          created_at?: string | null;
          created_by?: string | null;
          description?: string | null;
          id?: string;
          title?: string;
          type?: string;
          url?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'resources_created_by_fkey';
            columns: ['created_by'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      tags: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id?: string;
          name: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      user_comments: {
        Row: {
          comment: string;
          created_at: string | null;
          id: string;
          resource_id: string | null;
          user_id: string | null;
        };
        Insert: {
          comment: string;
          created_at?: string | null;
          id?: string;
          resource_id?: string | null;
          user_id?: string | null;
        };
        Update: {
          comment?: string;
          created_at?: string | null;
          id?: string;
          resource_id?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_comments_resource_id_fkey';
            columns: ['resource_id'];
            isOneToOne: false;
            referencedRelation: 'resources';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_comments_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      user_interests: {
        Row: {
          tag_id: string;
          user_id: string;
        };
        Insert: {
          tag_id: string;
          user_id: string;
        };
        Update: {
          tag_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'user_interests_tag_id_fkey';
            columns: ['tag_id'];
            isOneToOne: false;
            referencedRelation: 'tags';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_interests_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      user_resource: {
        Row: {
          bookmarked: boolean | null;
          clicked: boolean | null;
          disliked: boolean | null;
          interacted_at: string | null;
          liked: boolean | null;
          resource_id: string;
          user_id: string;
          viewed: boolean | null;
        };
        Insert: {
          bookmarked?: boolean | null;
          clicked?: boolean | null;
          disliked?: boolean | null;
          interacted_at?: string | null;
          liked?: boolean | null;
          resource_id: string;
          user_id: string;
          viewed?: boolean | null;
        };
        Update: {
          bookmarked?: boolean | null;
          clicked?: boolean | null;
          disliked?: boolean | null;
          interacted_at?: string | null;
          liked?: boolean | null;
          resource_id?: string;
          user_id?: string;
          viewed?: boolean | null;
        };
        Relationships: [
          {
            foreignKeyName: 'user_resource_resource_id_fkey';
            columns: ['resource_id'];
            isOneToOne: false;
            referencedRelation: 'resources';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'user_resource_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      users: {
        Row: {
          created_at: string | null;
          email: string | null;
          id: string;
          username: string | null;
        };
        Insert: {
          created_at?: string | null;
          email?: string | null;
          id?: string;
          username?: string | null;
        };
        Update: {
          created_at?: string | null;
          email?: string | null;
          id?: string;
          username?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
      DefaultSchema['Views'])
  ? (DefaultSchema['Tables'] &
      DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
  ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
  ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
  ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
  ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
