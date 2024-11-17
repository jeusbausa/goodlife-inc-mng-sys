"use client";

import { Card, BackgroundImage, ActionIcon, Alert, List, Flex, Group, Image, Text } from "@mantine/core";
import { FileRejection, Dropzone, MIME_TYPES, DropzoneIdle, FileWithPath } from "@mantine/dropzone";
import { isEmpty } from "lodash";
import { modals } from "@mantine/modals";
import { Plus, X } from "@phosphor-icons/react";
import { showErrorNotification } from "../../utils/common";
import React, { useEffect, useMemo, useState } from "react";

type DropzoneProps = {
    title?: string;
    maxFiles?: number;
    sizePerFile: number;
    onChange: (files: FileWithPath[]) => void;
    values: FileWithPath[];
};

const CardContainer = ({ children }: { children: React.ReactNode }) => (
    <Card shadow="md" mah={180} mih={180} maw={180} miw={180} p={0}>
        {children}
    </Card>
);

export function DropZone({ title, maxFiles = 1, values, sizePerFile, onChange }: DropzoneProps) {
    const MAX_SIZE = maxFiles * sizePerFile ** 2;
    const [files, setFiles] = useState<FileWithPath[]>(values);
    const [errors, setErrors] = useState<FileRejection[]>([]);

    const removeFile = (index: number) => {
        const currentFiles = [...files];

        currentFiles.splice(index, 1);

        const _currentFiles = [...currentFiles];

        setFiles(_currentFiles);
        onChange(_currentFiles);
    };

    const previewImage = (image: string) => {
        modals.open({
            centered: true,
            withCloseButton: false,
            style: { backgroundColor: "transparent" },
            transitionProps: { duration: 0 },
            styles: { content: { padding: 0 }, body: { padding: 0 } },
            children: <Image src={image} onLoad={() => image} />,
        });
    };

    const imgPreviews = useMemo(
        () =>
            files.map((file, index) => {
                const objectUrl = URL.createObjectURL(file);

                return (
                    <CardContainer key={index}>
                        <BackgroundImage
                            onClick={() => previewImage(objectUrl)}
                            style={{ cursor: "pointer" }}
                            w="100%"
                            h="100%"
                            src={objectUrl}
                            onLoad={() => objectUrl}
                            component="div"
                        >
                            <ActionIcon
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(index);
                                }}
                                color="gray"
                                size="sm"
                                radius="lg"
                                style={{ position: "absolute", top: 10, right: 10 }}
                            >
                                <X size={13} fontWeight={600} />
                            </ActionIcon>
                        </BackgroundImage>
                    </CardContainer>
                );
            }),
        [files]
    );

    const handleDrop = (_files: FileWithPath[]) => {
        const acceptedFiles: FileWithPath[] = [];

        setErrors([]);

        _files.forEach((file) => {
            if (file.size <= sizePerFile ** 2) {
                acceptedFiles.push(file);
            } else {
                showErrorNotification("Each file should not exceed 1MB", "Invalid image");
            }
        });

        const updatedFiles = [...files, ...acceptedFiles].splice(0, 3);

        if (!isEmpty(acceptedFiles)) {
            onChange(updatedFiles);
        }
    };

    useEffect(() => {
        setFiles(values);
    }, [values]);

    return (
        <>
            {title && <Text fw="bolder">{title}</Text>}
            {!isEmpty(errors) && (
                <Alert color="red">
                    <List size="sm" withPadding>
                        {errors?.map((fileRejection, i) => (
                            <List.Item key={i}>
                                <Text size="sm" c="red.9">
                                    {fileRejection.file.name} - {fileRejection.errors[0]!.message}
                                </Text>
                            </List.Item>
                        ))}
                    </List>
                </Alert>
            )}
            <Flex gap="lg">
                {imgPreviews}
                {files.length < maxFiles && (
                    <CardContainer>
                        <Dropzone
                            onDrop={handleDrop}
                            onReject={setErrors}
                            maxSize={MAX_SIZE}
                            maxFiles={maxFiles}
                            accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.webp]}
                            color="red"
                        >
                            <Group justify="center" mih={150} style={{ pointerEvents: "none" }}>
                                <DropzoneIdle>
                                    <Plus />
                                </DropzoneIdle>
                            </Group>
                        </Dropzone>
                    </CardContainer>
                )}
            </Flex>
        </>
    );
}
