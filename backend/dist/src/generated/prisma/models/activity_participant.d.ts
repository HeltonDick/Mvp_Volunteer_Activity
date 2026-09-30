import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type activity_participantModel = runtime.Types.Result.DefaultSelection<Prisma.$activity_participantPayload>;
export type AggregateActivity_participant = {
    _count: Activity_participantCountAggregateOutputType | null;
    _avg: Activity_participantAvgAggregateOutputType | null;
    _sum: Activity_participantSumAggregateOutputType | null;
    _min: Activity_participantMinAggregateOutputType | null;
    _max: Activity_participantMaxAggregateOutputType | null;
};
export type Activity_participantAvgAggregateOutputType = {
    id: number | null;
    activityId: number | null;
    participantId: number | null;
};
export type Activity_participantSumAggregateOutputType = {
    id: number | null;
    activityId: number | null;
    participantId: number | null;
};
export type Activity_participantMinAggregateOutputType = {
    id: number | null;
    activityId: number | null;
    participantId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type Activity_participantMaxAggregateOutputType = {
    id: number | null;
    activityId: number | null;
    participantId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type Activity_participantCountAggregateOutputType = {
    id: number;
    activityId: number;
    participantId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type Activity_participantAvgAggregateInputType = {
    id?: true;
    activityId?: true;
    participantId?: true;
};
export type Activity_participantSumAggregateInputType = {
    id?: true;
    activityId?: true;
    participantId?: true;
};
export type Activity_participantMinAggregateInputType = {
    id?: true;
    activityId?: true;
    participantId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type Activity_participantMaxAggregateInputType = {
    id?: true;
    activityId?: true;
    participantId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type Activity_participantCountAggregateInputType = {
    id?: true;
    activityId?: true;
    participantId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type Activity_participantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_participantWhereInput;
    orderBy?: Prisma.activity_participantOrderByWithRelationInput | Prisma.activity_participantOrderByWithRelationInput[];
    cursor?: Prisma.activity_participantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Activity_participantCountAggregateInputType;
    _avg?: Activity_participantAvgAggregateInputType;
    _sum?: Activity_participantSumAggregateInputType;
    _min?: Activity_participantMinAggregateInputType;
    _max?: Activity_participantMaxAggregateInputType;
};
export type GetActivity_participantAggregateType<T extends Activity_participantAggregateArgs> = {
    [P in keyof T & keyof AggregateActivity_participant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivity_participant[P]> : Prisma.GetScalarType<T[P], AggregateActivity_participant[P]>;
};
export type activity_participantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_participantWhereInput;
    orderBy?: Prisma.activity_participantOrderByWithAggregationInput | Prisma.activity_participantOrderByWithAggregationInput[];
    by: Prisma.Activity_participantScalarFieldEnum[] | Prisma.Activity_participantScalarFieldEnum;
    having?: Prisma.activity_participantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Activity_participantCountAggregateInputType | true;
    _avg?: Activity_participantAvgAggregateInputType;
    _sum?: Activity_participantSumAggregateInputType;
    _min?: Activity_participantMinAggregateInputType;
    _max?: Activity_participantMaxAggregateInputType;
};
export type Activity_participantGroupByOutputType = {
    id: number;
    activityId: number;
    participantId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: Activity_participantCountAggregateOutputType | null;
    _avg: Activity_participantAvgAggregateOutputType | null;
    _sum: Activity_participantSumAggregateOutputType | null;
    _min: Activity_participantMinAggregateOutputType | null;
    _max: Activity_participantMaxAggregateOutputType | null;
};
export type GetActivity_participantGroupByPayload<T extends activity_participantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Activity_participantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Activity_participantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Activity_participantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Activity_participantGroupByOutputType[P]>;
}>>;
export type activity_participantWhereInput = {
    AND?: Prisma.activity_participantWhereInput | Prisma.activity_participantWhereInput[];
    OR?: Prisma.activity_participantWhereInput[];
    NOT?: Prisma.activity_participantWhereInput | Prisma.activity_participantWhereInput[];
    id?: Prisma.IntFilter<"activity_participant"> | number;
    activityId?: Prisma.IntFilter<"activity_participant"> | number;
    participantId?: Prisma.IntFilter<"activity_participant"> | number;
    createdAt?: Prisma.DateTimeFilter<"activity_participant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"activity_participant"> | Date | string;
    activity?: Prisma.XOR<Prisma.ActivityScalarRelationFilter, Prisma.activityWhereInput>;
    participant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
};
export type activity_participantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    activityId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    activity?: Prisma.activityOrderByWithRelationInput;
    participant?: Prisma.userOrderByWithRelationInput;
};
export type activity_participantWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    activityId_participantId?: Prisma.activity_participantActivityIdParticipantIdCompoundUniqueInput;
    AND?: Prisma.activity_participantWhereInput | Prisma.activity_participantWhereInput[];
    OR?: Prisma.activity_participantWhereInput[];
    NOT?: Prisma.activity_participantWhereInput | Prisma.activity_participantWhereInput[];
    activityId?: Prisma.IntFilter<"activity_participant"> | number;
    participantId?: Prisma.IntFilter<"activity_participant"> | number;
    createdAt?: Prisma.DateTimeFilter<"activity_participant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"activity_participant"> | Date | string;
    activity?: Prisma.XOR<Prisma.ActivityScalarRelationFilter, Prisma.activityWhereInput>;
    participant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
}, "id" | "activityId_participantId">;
export type activity_participantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    activityId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.activity_participantCountOrderByAggregateInput;
    _avg?: Prisma.activity_participantAvgOrderByAggregateInput;
    _max?: Prisma.activity_participantMaxOrderByAggregateInput;
    _min?: Prisma.activity_participantMinOrderByAggregateInput;
    _sum?: Prisma.activity_participantSumOrderByAggregateInput;
};
export type activity_participantScalarWhereWithAggregatesInput = {
    AND?: Prisma.activity_participantScalarWhereWithAggregatesInput | Prisma.activity_participantScalarWhereWithAggregatesInput[];
    OR?: Prisma.activity_participantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.activity_participantScalarWhereWithAggregatesInput | Prisma.activity_participantScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"activity_participant"> | number;
    activityId?: Prisma.IntWithAggregatesFilter<"activity_participant"> | number;
    participantId?: Prisma.IntWithAggregatesFilter<"activity_participant"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"activity_participant"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"activity_participant"> | Date | string;
};
export type activity_participantCreateInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    activity: Prisma.activityCreateNestedOneWithoutParticipantsInput;
    participant: Prisma.userCreateNestedOneWithoutParticipationsInput;
};
export type activity_participantUncheckedCreateInput = {
    id?: number;
    activityId: number;
    participantId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activity_participantUpdateInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: Prisma.activityUpdateOneRequiredWithoutParticipantsNestedInput;
    participant?: Prisma.userUpdateOneRequiredWithoutParticipationsNestedInput;
};
export type activity_participantUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activityId?: Prisma.IntFieldUpdateOperationsInput | number;
    participantId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activity_participantCreateManyInput = {
    id?: number;
    activityId: number;
    participantId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activity_participantUpdateManyMutationInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activity_participantUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activityId?: Prisma.IntFieldUpdateOperationsInput | number;
    participantId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Activity_participantListRelationFilter = {
    every?: Prisma.activity_participantWhereInput;
    some?: Prisma.activity_participantWhereInput;
    none?: Prisma.activity_participantWhereInput;
};
export type activity_participantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type activity_participantActivityIdParticipantIdCompoundUniqueInput = {
    activityId: number;
    participantId: number;
};
export type activity_participantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activityId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type activity_participantAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activityId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
};
export type activity_participantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activityId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type activity_participantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activityId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type activity_participantSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    activityId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
};
export type activity_participantCreateNestedManyWithoutParticipantInput = {
    create?: Prisma.XOR<Prisma.activity_participantCreateWithoutParticipantInput, Prisma.activity_participantUncheckedCreateWithoutParticipantInput> | Prisma.activity_participantCreateWithoutParticipantInput[] | Prisma.activity_participantUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.activity_participantCreateOrConnectWithoutParticipantInput | Prisma.activity_participantCreateOrConnectWithoutParticipantInput[];
    createMany?: Prisma.activity_participantCreateManyParticipantInputEnvelope;
    connect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
};
export type activity_participantUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: Prisma.XOR<Prisma.activity_participantCreateWithoutParticipantInput, Prisma.activity_participantUncheckedCreateWithoutParticipantInput> | Prisma.activity_participantCreateWithoutParticipantInput[] | Prisma.activity_participantUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.activity_participantCreateOrConnectWithoutParticipantInput | Prisma.activity_participantCreateOrConnectWithoutParticipantInput[];
    createMany?: Prisma.activity_participantCreateManyParticipantInputEnvelope;
    connect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
};
export type activity_participantUpdateManyWithoutParticipantNestedInput = {
    create?: Prisma.XOR<Prisma.activity_participantCreateWithoutParticipantInput, Prisma.activity_participantUncheckedCreateWithoutParticipantInput> | Prisma.activity_participantCreateWithoutParticipantInput[] | Prisma.activity_participantUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.activity_participantCreateOrConnectWithoutParticipantInput | Prisma.activity_participantCreateOrConnectWithoutParticipantInput[];
    upsert?: Prisma.activity_participantUpsertWithWhereUniqueWithoutParticipantInput | Prisma.activity_participantUpsertWithWhereUniqueWithoutParticipantInput[];
    createMany?: Prisma.activity_participantCreateManyParticipantInputEnvelope;
    set?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    disconnect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    delete?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    connect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    update?: Prisma.activity_participantUpdateWithWhereUniqueWithoutParticipantInput | Prisma.activity_participantUpdateWithWhereUniqueWithoutParticipantInput[];
    updateMany?: Prisma.activity_participantUpdateManyWithWhereWithoutParticipantInput | Prisma.activity_participantUpdateManyWithWhereWithoutParticipantInput[];
    deleteMany?: Prisma.activity_participantScalarWhereInput | Prisma.activity_participantScalarWhereInput[];
};
export type activity_participantUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: Prisma.XOR<Prisma.activity_participantCreateWithoutParticipantInput, Prisma.activity_participantUncheckedCreateWithoutParticipantInput> | Prisma.activity_participantCreateWithoutParticipantInput[] | Prisma.activity_participantUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.activity_participantCreateOrConnectWithoutParticipantInput | Prisma.activity_participantCreateOrConnectWithoutParticipantInput[];
    upsert?: Prisma.activity_participantUpsertWithWhereUniqueWithoutParticipantInput | Prisma.activity_participantUpsertWithWhereUniqueWithoutParticipantInput[];
    createMany?: Prisma.activity_participantCreateManyParticipantInputEnvelope;
    set?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    disconnect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    delete?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    connect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    update?: Prisma.activity_participantUpdateWithWhereUniqueWithoutParticipantInput | Prisma.activity_participantUpdateWithWhereUniqueWithoutParticipantInput[];
    updateMany?: Prisma.activity_participantUpdateManyWithWhereWithoutParticipantInput | Prisma.activity_participantUpdateManyWithWhereWithoutParticipantInput[];
    deleteMany?: Prisma.activity_participantScalarWhereInput | Prisma.activity_participantScalarWhereInput[];
};
export type activity_participantCreateNestedManyWithoutActivityInput = {
    create?: Prisma.XOR<Prisma.activity_participantCreateWithoutActivityInput, Prisma.activity_participantUncheckedCreateWithoutActivityInput> | Prisma.activity_participantCreateWithoutActivityInput[] | Prisma.activity_participantUncheckedCreateWithoutActivityInput[];
    connectOrCreate?: Prisma.activity_participantCreateOrConnectWithoutActivityInput | Prisma.activity_participantCreateOrConnectWithoutActivityInput[];
    createMany?: Prisma.activity_participantCreateManyActivityInputEnvelope;
    connect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
};
export type activity_participantUncheckedCreateNestedManyWithoutActivityInput = {
    create?: Prisma.XOR<Prisma.activity_participantCreateWithoutActivityInput, Prisma.activity_participantUncheckedCreateWithoutActivityInput> | Prisma.activity_participantCreateWithoutActivityInput[] | Prisma.activity_participantUncheckedCreateWithoutActivityInput[];
    connectOrCreate?: Prisma.activity_participantCreateOrConnectWithoutActivityInput | Prisma.activity_participantCreateOrConnectWithoutActivityInput[];
    createMany?: Prisma.activity_participantCreateManyActivityInputEnvelope;
    connect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
};
export type activity_participantUpdateManyWithoutActivityNestedInput = {
    create?: Prisma.XOR<Prisma.activity_participantCreateWithoutActivityInput, Prisma.activity_participantUncheckedCreateWithoutActivityInput> | Prisma.activity_participantCreateWithoutActivityInput[] | Prisma.activity_participantUncheckedCreateWithoutActivityInput[];
    connectOrCreate?: Prisma.activity_participantCreateOrConnectWithoutActivityInput | Prisma.activity_participantCreateOrConnectWithoutActivityInput[];
    upsert?: Prisma.activity_participantUpsertWithWhereUniqueWithoutActivityInput | Prisma.activity_participantUpsertWithWhereUniqueWithoutActivityInput[];
    createMany?: Prisma.activity_participantCreateManyActivityInputEnvelope;
    set?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    disconnect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    delete?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    connect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    update?: Prisma.activity_participantUpdateWithWhereUniqueWithoutActivityInput | Prisma.activity_participantUpdateWithWhereUniqueWithoutActivityInput[];
    updateMany?: Prisma.activity_participantUpdateManyWithWhereWithoutActivityInput | Prisma.activity_participantUpdateManyWithWhereWithoutActivityInput[];
    deleteMany?: Prisma.activity_participantScalarWhereInput | Prisma.activity_participantScalarWhereInput[];
};
export type activity_participantUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: Prisma.XOR<Prisma.activity_participantCreateWithoutActivityInput, Prisma.activity_participantUncheckedCreateWithoutActivityInput> | Prisma.activity_participantCreateWithoutActivityInput[] | Prisma.activity_participantUncheckedCreateWithoutActivityInput[];
    connectOrCreate?: Prisma.activity_participantCreateOrConnectWithoutActivityInput | Prisma.activity_participantCreateOrConnectWithoutActivityInput[];
    upsert?: Prisma.activity_participantUpsertWithWhereUniqueWithoutActivityInput | Prisma.activity_participantUpsertWithWhereUniqueWithoutActivityInput[];
    createMany?: Prisma.activity_participantCreateManyActivityInputEnvelope;
    set?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    disconnect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    delete?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    connect?: Prisma.activity_participantWhereUniqueInput | Prisma.activity_participantWhereUniqueInput[];
    update?: Prisma.activity_participantUpdateWithWhereUniqueWithoutActivityInput | Prisma.activity_participantUpdateWithWhereUniqueWithoutActivityInput[];
    updateMany?: Prisma.activity_participantUpdateManyWithWhereWithoutActivityInput | Prisma.activity_participantUpdateManyWithWhereWithoutActivityInput[];
    deleteMany?: Prisma.activity_participantScalarWhereInput | Prisma.activity_participantScalarWhereInput[];
};
export type activity_participantCreateWithoutParticipantInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    activity: Prisma.activityCreateNestedOneWithoutParticipantsInput;
};
export type activity_participantUncheckedCreateWithoutParticipantInput = {
    id?: number;
    activityId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activity_participantCreateOrConnectWithoutParticipantInput = {
    where: Prisma.activity_participantWhereUniqueInput;
    create: Prisma.XOR<Prisma.activity_participantCreateWithoutParticipantInput, Prisma.activity_participantUncheckedCreateWithoutParticipantInput>;
};
export type activity_participantCreateManyParticipantInputEnvelope = {
    data: Prisma.activity_participantCreateManyParticipantInput | Prisma.activity_participantCreateManyParticipantInput[];
    skipDuplicates?: boolean;
};
export type activity_participantUpsertWithWhereUniqueWithoutParticipantInput = {
    where: Prisma.activity_participantWhereUniqueInput;
    update: Prisma.XOR<Prisma.activity_participantUpdateWithoutParticipantInput, Prisma.activity_participantUncheckedUpdateWithoutParticipantInput>;
    create: Prisma.XOR<Prisma.activity_participantCreateWithoutParticipantInput, Prisma.activity_participantUncheckedCreateWithoutParticipantInput>;
};
export type activity_participantUpdateWithWhereUniqueWithoutParticipantInput = {
    where: Prisma.activity_participantWhereUniqueInput;
    data: Prisma.XOR<Prisma.activity_participantUpdateWithoutParticipantInput, Prisma.activity_participantUncheckedUpdateWithoutParticipantInput>;
};
export type activity_participantUpdateManyWithWhereWithoutParticipantInput = {
    where: Prisma.activity_participantScalarWhereInput;
    data: Prisma.XOR<Prisma.activity_participantUpdateManyMutationInput, Prisma.activity_participantUncheckedUpdateManyWithoutParticipantInput>;
};
export type activity_participantScalarWhereInput = {
    AND?: Prisma.activity_participantScalarWhereInput | Prisma.activity_participantScalarWhereInput[];
    OR?: Prisma.activity_participantScalarWhereInput[];
    NOT?: Prisma.activity_participantScalarWhereInput | Prisma.activity_participantScalarWhereInput[];
    id?: Prisma.IntFilter<"activity_participant"> | number;
    activityId?: Prisma.IntFilter<"activity_participant"> | number;
    participantId?: Prisma.IntFilter<"activity_participant"> | number;
    createdAt?: Prisma.DateTimeFilter<"activity_participant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"activity_participant"> | Date | string;
};
export type activity_participantCreateWithoutActivityInput = {
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participant: Prisma.userCreateNestedOneWithoutParticipationsInput;
};
export type activity_participantUncheckedCreateWithoutActivityInput = {
    id?: number;
    participantId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activity_participantCreateOrConnectWithoutActivityInput = {
    where: Prisma.activity_participantWhereUniqueInput;
    create: Prisma.XOR<Prisma.activity_participantCreateWithoutActivityInput, Prisma.activity_participantUncheckedCreateWithoutActivityInput>;
};
export type activity_participantCreateManyActivityInputEnvelope = {
    data: Prisma.activity_participantCreateManyActivityInput | Prisma.activity_participantCreateManyActivityInput[];
    skipDuplicates?: boolean;
};
export type activity_participantUpsertWithWhereUniqueWithoutActivityInput = {
    where: Prisma.activity_participantWhereUniqueInput;
    update: Prisma.XOR<Prisma.activity_participantUpdateWithoutActivityInput, Prisma.activity_participantUncheckedUpdateWithoutActivityInput>;
    create: Prisma.XOR<Prisma.activity_participantCreateWithoutActivityInput, Prisma.activity_participantUncheckedCreateWithoutActivityInput>;
};
export type activity_participantUpdateWithWhereUniqueWithoutActivityInput = {
    where: Prisma.activity_participantWhereUniqueInput;
    data: Prisma.XOR<Prisma.activity_participantUpdateWithoutActivityInput, Prisma.activity_participantUncheckedUpdateWithoutActivityInput>;
};
export type activity_participantUpdateManyWithWhereWithoutActivityInput = {
    where: Prisma.activity_participantScalarWhereInput;
    data: Prisma.XOR<Prisma.activity_participantUpdateManyMutationInput, Prisma.activity_participantUncheckedUpdateManyWithoutActivityInput>;
};
export type activity_participantCreateManyParticipantInput = {
    id?: number;
    activityId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activity_participantUpdateWithoutParticipantInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    activity?: Prisma.activityUpdateOneRequiredWithoutParticipantsNestedInput;
};
export type activity_participantUncheckedUpdateWithoutParticipantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activityId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activity_participantUncheckedUpdateManyWithoutParticipantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activityId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activity_participantCreateManyActivityInput = {
    id?: number;
    participantId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type activity_participantUpdateWithoutActivityInput = {
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.userUpdateOneRequiredWithoutParticipationsNestedInput;
};
export type activity_participantUncheckedUpdateWithoutActivityInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    participantId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activity_participantUncheckedUpdateManyWithoutActivityInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    participantId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type activity_participantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    activityId?: boolean;
    participantId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    activity?: boolean | Prisma.activityDefaultArgs<ExtArgs>;
    participant?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activity_participant"]>;
export type activity_participantSelectScalar = {
    id?: boolean;
    activityId?: boolean;
    participantId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type activity_participantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "activityId" | "participantId" | "createdAt" | "updatedAt", ExtArgs["result"]["activity_participant"]>;
export type activity_participantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activity?: boolean | Prisma.activityDefaultArgs<ExtArgs>;
    participant?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type $activity_participantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "activity_participant";
    objects: {
        activity: Prisma.$activityPayload<ExtArgs>;
        participant: Prisma.$userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        activityId: number;
        participantId: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["activity_participant"]>;
    composites: {};
};
export type activity_participantGetPayload<S extends boolean | null | undefined | activity_participantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$activity_participantPayload, S>;
export type activity_participantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<activity_participantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Activity_participantCountAggregateInputType | true;
};
export interface activity_participantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['activity_participant'];
        meta: {
            name: 'activity_participant';
        };
    };
    findUnique<T extends activity_participantFindUniqueArgs>(args: Prisma.SelectSubset<T, activity_participantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__activity_participantClient<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends activity_participantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, activity_participantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__activity_participantClient<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends activity_participantFindFirstArgs>(args?: Prisma.SelectSubset<T, activity_participantFindFirstArgs<ExtArgs>>): Prisma.Prisma__activity_participantClient<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends activity_participantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, activity_participantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__activity_participantClient<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends activity_participantFindManyArgs>(args?: Prisma.SelectSubset<T, activity_participantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends activity_participantCreateArgs>(args: Prisma.SelectSubset<T, activity_participantCreateArgs<ExtArgs>>): Prisma.Prisma__activity_participantClient<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends activity_participantCreateManyArgs>(args?: Prisma.SelectSubset<T, activity_participantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends activity_participantDeleteArgs>(args: Prisma.SelectSubset<T, activity_participantDeleteArgs<ExtArgs>>): Prisma.Prisma__activity_participantClient<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends activity_participantUpdateArgs>(args: Prisma.SelectSubset<T, activity_participantUpdateArgs<ExtArgs>>): Prisma.Prisma__activity_participantClient<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends activity_participantDeleteManyArgs>(args?: Prisma.SelectSubset<T, activity_participantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends activity_participantUpdateManyArgs>(args: Prisma.SelectSubset<T, activity_participantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends activity_participantUpsertArgs>(args: Prisma.SelectSubset<T, activity_participantUpsertArgs<ExtArgs>>): Prisma.Prisma__activity_participantClient<runtime.Types.Result.GetResult<Prisma.$activity_participantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends activity_participantCountArgs>(args?: Prisma.Subset<T, activity_participantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Activity_participantCountAggregateOutputType> : number>;
    aggregate<T extends Activity_participantAggregateArgs>(args: Prisma.Subset<T, Activity_participantAggregateArgs>): Prisma.PrismaPromise<GetActivity_participantAggregateType<T>>;
    groupBy<T extends activity_participantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: activity_participantGroupByArgs['orderBy'];
    } : {
        orderBy?: activity_participantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, activity_participantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivity_participantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: activity_participantFieldRefs;
}
export interface Prisma__activity_participantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    activity<T extends Prisma.activityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.activityDefaultArgs<ExtArgs>>): Prisma.Prisma__activityClient<runtime.Types.Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    participant<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface activity_participantFieldRefs {
    readonly id: Prisma.FieldRef<"activity_participant", 'Int'>;
    readonly activityId: Prisma.FieldRef<"activity_participant", 'Int'>;
    readonly participantId: Prisma.FieldRef<"activity_participant", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"activity_participant", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"activity_participant", 'DateTime'>;
}
export type activity_participantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_participantSelect<ExtArgs> | null;
    omit?: Prisma.activity_participantOmit<ExtArgs> | null;
    include?: Prisma.activity_participantInclude<ExtArgs> | null;
    where: Prisma.activity_participantWhereUniqueInput;
};
export type activity_participantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_participantSelect<ExtArgs> | null;
    omit?: Prisma.activity_participantOmit<ExtArgs> | null;
    include?: Prisma.activity_participantInclude<ExtArgs> | null;
    where: Prisma.activity_participantWhereUniqueInput;
};
export type activity_participantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type activity_participantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type activity_participantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type activity_participantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_participantSelect<ExtArgs> | null;
    omit?: Prisma.activity_participantOmit<ExtArgs> | null;
    include?: Prisma.activity_participantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.activity_participantCreateInput, Prisma.activity_participantUncheckedCreateInput>;
};
export type activity_participantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.activity_participantCreateManyInput | Prisma.activity_participantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type activity_participantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_participantSelect<ExtArgs> | null;
    omit?: Prisma.activity_participantOmit<ExtArgs> | null;
    include?: Prisma.activity_participantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.activity_participantUpdateInput, Prisma.activity_participantUncheckedUpdateInput>;
    where: Prisma.activity_participantWhereUniqueInput;
};
export type activity_participantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.activity_participantUpdateManyMutationInput, Prisma.activity_participantUncheckedUpdateManyInput>;
    where?: Prisma.activity_participantWhereInput;
    limit?: number;
};
export type activity_participantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_participantSelect<ExtArgs> | null;
    omit?: Prisma.activity_participantOmit<ExtArgs> | null;
    include?: Prisma.activity_participantInclude<ExtArgs> | null;
    where: Prisma.activity_participantWhereUniqueInput;
    create: Prisma.XOR<Prisma.activity_participantCreateInput, Prisma.activity_participantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.activity_participantUpdateInput, Prisma.activity_participantUncheckedUpdateInput>;
};
export type activity_participantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_participantSelect<ExtArgs> | null;
    omit?: Prisma.activity_participantOmit<ExtArgs> | null;
    include?: Prisma.activity_participantInclude<ExtArgs> | null;
    where: Prisma.activity_participantWhereUniqueInput;
};
export type activity_participantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.activity_participantWhereInput;
    limit?: number;
};
export type activity_participantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.activity_participantSelect<ExtArgs> | null;
    omit?: Prisma.activity_participantOmit<ExtArgs> | null;
    include?: Prisma.activity_participantInclude<ExtArgs> | null;
};
