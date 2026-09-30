import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type userModel = runtime.Types.Result.DefaultSelection<Prisma.$userPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    cursor?: Prisma.userWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type userGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithAggregationInput | Prisma.userOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type userWhereInput = {
    AND?: Prisma.userWhereInput | Prisma.userWhereInput[];
    OR?: Prisma.userWhereInput[];
    NOT?: Prisma.userWhereInput | Prisma.userWhereInput[];
    id?: Prisma.IntFilter<"user"> | number;
    name?: Prisma.StringFilter<"user"> | string;
    email?: Prisma.StringFilter<"user"> | string;
    password?: Prisma.StringFilter<"user"> | string;
    role?: Prisma.EnumRoleFilter<"user"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"user"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"user"> | Date | string;
    activities?: Prisma.ActivityListRelationFilter;
    participations?: Prisma.Activity_participantListRelationFilter;
};
export type userOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    activities?: Prisma.activityOrderByRelationAggregateInput;
    participations?: Prisma.activity_participantOrderByRelationAggregateInput;
    _relevance?: Prisma.userOrderByRelevanceInput;
};
export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.userWhereInput | Prisma.userWhereInput[];
    OR?: Prisma.userWhereInput[];
    NOT?: Prisma.userWhereInput | Prisma.userWhereInput[];
    name?: Prisma.StringFilter<"user"> | string;
    password?: Prisma.StringFilter<"user"> | string;
    role?: Prisma.EnumRoleFilter<"user"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"user"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"user"> | Date | string;
    activities?: Prisma.ActivityListRelationFilter;
    participations?: Prisma.Activity_participantListRelationFilter;
}, "id" | "email">;
export type userOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.userCountOrderByAggregateInput;
    _avg?: Prisma.userAvgOrderByAggregateInput;
    _max?: Prisma.userMaxOrderByAggregateInput;
    _min?: Prisma.userMinOrderByAggregateInput;
    _sum?: Prisma.userSumOrderByAggregateInput;
};
export type userScalarWhereWithAggregatesInput = {
    AND?: Prisma.userScalarWhereWithAggregatesInput | Prisma.userScalarWhereWithAggregatesInput[];
    OR?: Prisma.userScalarWhereWithAggregatesInput[];
    NOT?: Prisma.userScalarWhereWithAggregatesInput | Prisma.userScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"user"> | number;
    name?: Prisma.StringWithAggregatesFilter<"user"> | string;
    email?: Prisma.StringWithAggregatesFilter<"user"> | string;
    password?: Prisma.StringWithAggregatesFilter<"user"> | string;
    role?: Prisma.EnumRoleWithAggregatesFilter<"user"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"user"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"user"> | Date | string;
};
export type userCreateInput = {
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    activities?: Prisma.activityCreateNestedManyWithoutAuthorInput;
    participations?: Prisma.activity_participantCreateNestedManyWithoutParticipantInput;
};
export type userUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    activities?: Prisma.activityUncheckedCreateNestedManyWithoutAuthorInput;
    participations?: Prisma.activity_participantUncheckedCreateNestedManyWithoutParticipantInput;
};
export type userUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activities?: Prisma.activityUpdateManyWithoutAuthorNestedInput;
    participations?: Prisma.activity_participantUpdateManyWithoutParticipantNestedInput;
};
export type userUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activities?: Prisma.activityUncheckedUpdateManyWithoutAuthorNestedInput;
    participations?: Prisma.activity_participantUncheckedUpdateManyWithoutParticipantNestedInput;
};
export type userCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type userUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userOrderByRelevanceInput = {
    fields: Prisma.userOrderByRelevanceFieldEnum | Prisma.userOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type userCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type userMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type userSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.userWhereInput | null;
    isNot?: Prisma.userWhereInput | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.userWhereInput;
    isNot?: Prisma.userWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type userCreateNestedOneWithoutActivitiesInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutActivitiesInput, Prisma.userUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutActivitiesInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneWithoutActivitiesNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutActivitiesInput, Prisma.userUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutActivitiesInput;
    upsert?: Prisma.userUpsertWithoutActivitiesInput;
    disconnect?: Prisma.userWhereInput | boolean;
    delete?: Prisma.userWhereInput | boolean;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutActivitiesInput, Prisma.userUpdateWithoutActivitiesInput>, Prisma.userUncheckedUpdateWithoutActivitiesInput>;
};
export type userCreateNestedOneWithoutParticipationsInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutParticipationsInput, Prisma.userUncheckedCreateWithoutParticipationsInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutParticipationsInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutParticipationsInput, Prisma.userUncheckedCreateWithoutParticipationsInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutParticipationsInput;
    upsert?: Prisma.userUpsertWithoutParticipationsInput;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutParticipationsInput, Prisma.userUpdateWithoutParticipationsInput>, Prisma.userUncheckedUpdateWithoutParticipationsInput>;
};
export type userCreateWithoutActivitiesInput = {
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participations?: Prisma.activity_participantCreateNestedManyWithoutParticipantInput;
};
export type userUncheckedCreateWithoutActivitiesInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participations?: Prisma.activity_participantUncheckedCreateNestedManyWithoutParticipantInput;
};
export type userCreateOrConnectWithoutActivitiesInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutActivitiesInput, Prisma.userUncheckedCreateWithoutActivitiesInput>;
};
export type userUpsertWithoutActivitiesInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutActivitiesInput, Prisma.userUncheckedUpdateWithoutActivitiesInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutActivitiesInput, Prisma.userUncheckedCreateWithoutActivitiesInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutActivitiesInput, Prisma.userUncheckedUpdateWithoutActivitiesInput>;
};
export type userUpdateWithoutActivitiesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participations?: Prisma.activity_participantUpdateManyWithoutParticipantNestedInput;
};
export type userUncheckedUpdateWithoutActivitiesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participations?: Prisma.activity_participantUncheckedUpdateManyWithoutParticipantNestedInput;
};
export type userCreateWithoutParticipationsInput = {
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    activities?: Prisma.activityCreateNestedManyWithoutAuthorInput;
};
export type userUncheckedCreateWithoutParticipationsInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    activities?: Prisma.activityUncheckedCreateNestedManyWithoutAuthorInput;
};
export type userCreateOrConnectWithoutParticipationsInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutParticipationsInput, Prisma.userUncheckedCreateWithoutParticipationsInput>;
};
export type userUpsertWithoutParticipationsInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutParticipationsInput, Prisma.userUncheckedUpdateWithoutParticipationsInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutParticipationsInput, Prisma.userUncheckedCreateWithoutParticipationsInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutParticipationsInput, Prisma.userUncheckedUpdateWithoutParticipationsInput>;
};
export type userUpdateWithoutParticipationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activities?: Prisma.activityUpdateManyWithoutAuthorNestedInput;
};
export type userUncheckedUpdateWithoutParticipationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activities?: Prisma.activityUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type UserCountOutputType = {
    activities: number;
    participations: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs;
    participations?: boolean | UserCountOutputTypeCountParticipationsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activityWhereInput;
};
export type UserCountOutputTypeCountParticipationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_participantWhereInput;
};
export type userSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    activities?: boolean | Prisma.user$activitiesArgs<ExtArgs>;
    participations?: boolean | Prisma.user$participationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type userSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type userOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type userInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activities?: boolean | Prisma.user$activitiesArgs<ExtArgs>;
    participations?: boolean | Prisma.user$participationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $userPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user";
    objects: {
        activities: Prisma.$activityPayload<ExtArgs>[];
        participations: Prisma.$activity_participantPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$userPayload, S>;
export type userCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface userDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user'];
        meta: {
            name: 'user';
        };
    };
    findUnique<T extends userFindUniqueArgs>(args: Prisma.SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends userFindFirstArgs>(args?: Prisma.SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends userFindManyArgs>(args?: Prisma.SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends userCreateArgs>(args: Prisma.SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends userCreateManyArgs>(args?: Prisma.SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends userDeleteArgs>(args: Prisma.SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends userUpdateArgs>(args: Prisma.SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends userDeleteManyArgs>(args?: Prisma.SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends userUpdateManyArgs>(args: Prisma.SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends userUpsertArgs>(args: Prisma.SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends userCountArgs>(args?: Prisma.Subset<T, userCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends userGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: userGroupByArgs['orderBy'];
    } : {
        orderBy?: userGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: userFieldRefs;
}
export interface Prisma__userClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    activities<T extends Prisma.user$activitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    participations<T extends Prisma.user$participationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface userFieldRefs {
    readonly id: Prisma.FieldRef<"user", 'Int'>;
    readonly name: Prisma.FieldRef<"user", 'String'>;
    readonly email: Prisma.FieldRef<"user", 'String'>;
    readonly password: Prisma.FieldRef<"user", 'String'>;
    readonly role: Prisma.FieldRef<"user", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"user", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"user", 'DateTime'>;
}
export type userFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where: Prisma.userWhereUniqueInput;
};
export type userFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where: Prisma.userWhereUniqueInput;
};
export type userFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    cursor?: Prisma.userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type userFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    cursor?: Prisma.userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type userFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    cursor?: Prisma.userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type userCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.userCreateInput, Prisma.userUncheckedCreateInput>;
};
export type userCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.userCreateManyInput | Prisma.userCreateManyInput[];
    skipDuplicates?: boolean;
};
export type userUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.userUpdateInput, Prisma.userUncheckedUpdateInput>;
    where: Prisma.userWhereUniqueInput;
};
export type userUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.userUpdateManyMutationInput, Prisma.userUncheckedUpdateManyInput>;
    where?: Prisma.userWhereInput;
    limit?: number;
};
export type userUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateInput, Prisma.userUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.userUpdateInput, Prisma.userUncheckedUpdateInput>;
};
export type userDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where: Prisma.userWhereUniqueInput;
};
export type userDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userWhereInput;
    limit?: number;
};
export type user$activitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activitySelect<ExtArgs> | null;
    omit?: Prisma.activityOmit<ExtArgs> | null;
    include?: Prisma.activityInclude<ExtArgs> | null;
    where?: Prisma.activityWhereInput;
    orderBy?: Prisma.activityOrderByWithRelationInput | Prisma.activityOrderByWithRelationInput[];
    cursor?: Prisma.activityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityScalarFieldEnum | Prisma.ActivityScalarFieldEnum[];
};
export type user$participationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_participantSelect<ExtArgs> | null;
    omit?: Prisma.activity_participantOmit<ExtArgs> | null;
    include?: Prisma.activity_participantInclude<ExtArgs> | null;
    where?: Prisma.activity_participantWhereInput;
    orderBy?: Prisma.activity_participantOrderByWithRelationInput | Prisma.activity_participantOrderByWithRelationInput[];
    cursor?: Prisma.activity_participantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Activity_participantScalarFieldEnum | Prisma.Activity_participantScalarFieldEnum[];
};
export type userDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
};
